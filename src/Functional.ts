import { Tokenizer } from './tokenizer';
import {
    DxfObj,
    matcher_t,
    SpecificationMap,
    tokens_t,
    token_t,
} from './Types';

/**
 * Trim an split dxf content into trimmed lines.
 *
 * @param content - The dxf content.
 * @returns An array of trimmed lines.
 */
export function lines(content: string): string[] {
    if (content === '') return [];
    return content
        .trim()
        .split(/\r\n|\r|\n/gm)
        .map((line) => line.trim());
}

/**
 * Create a token object.
 *
 * @param code - The group code.
 * @param value - The group code's value
 * @param line - The line number where this token starts.
 * @returns The token object.
 */
export function token(code: number, value: string, line: number): token_t {
    return {
        code,
        value,
        line,
    };
}

/**
 * Return true if the string is all digits, otherwise return false.
 *
 * @param str - The string to be tested.
 * @returns A boolean value.
 */
export function numeric(str: string) {
    return /^\d+$/.test(str);
}

/**
 * Create a error message.
 *
 * @param value - The expected value.
 * @param line - The line of the expected value.
 * @returns The error message.
 */
export function expected(value: string, line: number) {
    return `Expected ${value} at line ${line}.`;
}

/**
 * Create a error message.
 *
 * @param value - The unexpected value.
 * @param line - The line of the unexpected value.
 * @returns The error message.
 */
export function unexpected(value: string, line: number) {
    return `Unexpected ${value} at line ${line}.`;
}

/**
 * Create an array of tokens from the array of lines,
 * otherwise returns a error message.
 *
 * @param lines - The array of dxf lines.
 * @returns An array of tokens or an error message.
 */
export function tokens(lines: string[]): string | tokens_t {
    const length = lines.length;
    const tokens: tokens_t = [];
    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            const code = lines[i++].trim();
            if (!numeric(code)) return expected('code', i);
            if (i >= length) return expected('value', i + 1);
            tokens.push(token(parseInt(code), lines[i].trim(), i));
        }
    }
    return tokens;
}

export function type(value: string): matcher_t {
    return function (token: token_t) {
        return token.value === value && token.code === 0;
    };
}

export function code(code: number): matcher_t {
    return function (token: token_t) {
        return token.code === code;
    };
}

export function cZero(token: token_t) {
    return token.code === 0;
}

export function c102(token: token_t) {
    return token.code === 102;
}

export function c102End(token: token_t) {
    return token.code === 102 && token.value === '}';
}

export function variable(token: token_t) {
    return token.code === 9;
}

export function lTypeElement(token: token_t) {
    return token.code === 49;
}

export function eclass(token: token_t) {
    return token.code === 0 && token.value === 'CLASS';
}

export function ename(value: string): matcher_t {
    return function (token: token_t) {
        return token.value === value && token.code === 2;
    };
}

export const section = type('SECTION');
export const endsec = type('ENDSEC');
export const table = type('TABLE');
export const endtab = type('ENDTAB');
export const eof = type('EOF');

export function value(token: token_t): string | number | boolean {
    if (
        (token.code >= 10 && token.code <= 59) ||
        (token.code >= 110 && token.code <= 149) ||
        (token.code >= 460 && token.code <= 469) ||
        (token.code >= 210 && token.code <= 239) ||
        (token.code >= 1010 && token.code <= 1059)
    )
        parseFloat(token.value);
    else if (
        (token.code >= 60 && token.code <= 99) ||
        (token.code >= 160 && token.code <= 179) ||
        (token.code >= 270 && token.code <= 289) ||
        (token.code >= 370 && token.code <= 389) ||
        (token.code >= 400 && token.code <= 409) ||
        (token.code >= 420 && token.code <= 429) ||
        (token.code >= 440 && token.code <= 459) ||
        (token.code >= 1060 && token.code <= 1071)
    )
        return parseInt(token.value);
    else if (token.code >= 290 && token.code <= 299)
        return Boolean(Number(token.value));
    return token.value;
}

export function last<T>(arr: T[]) {
    return arr[arr.length - 1];
}

export function defineProperty(
    tk: Tokenizer,
    obj: DxfObj,
    spec: SpecificationMap
): void {
    const token = tk.next();
    if (spec.has(token.code)) {
        const property = spec.get(token.code) as string;
        if (Array.isArray(obj[property])) {
            (obj[property] as any[]).push(value(token));
        } else {
            if (obj[property]) tk.unexpected('code', tk.cline);
            obj[property] = value(token);
        }
    } else {
        if (!obj.unknowns) obj.unknowns = [];
        obj.unknowns.push(token);
    }
}
