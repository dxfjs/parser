import {
    endsec,
    endtab,
    eof,
    expected,
    lines,
    section,
    table,
    tokens,
    unexpected,
} from './Functional';
import { matcher_t, SpecificationMap, tokens_t, token_t } from './Types';

export class Tokenizer {
    readonly tokens: tokens_t = [];
    error?: string;
    private index = 0;

    get cline(): number {
        return this.index * 2 + 1;
    }

    get vline(): number {
        return this.index * 2 + 2;
    }

    constructor(content: string) {
        const _lines = lines(content);
        const _tokensOrError = tokens(_lines);
        if (Array.isArray(_tokensOrError)) this.tokens = _tokensOrError;
        else this.error = _tokensOrError;
    }

    hasNext(): boolean {
        return this.index < this.tokens.length && !this.hasError();
    }

    next(): token_t {
        return this.tokens[this.index++];
    }

    peek(): token_t {
        return this.tokens[this.index];
    }

    advance(step = 1): void {
        this.index += step;
    }

    is(matcher: matcher_t, advance = false): boolean {
        const res = matcher(this.peek());
        if (res && advance) this.advance();
        return res;
    }

    isNot(matcher: matcher_t, advance = false): boolean {
        return !this.is(matcher, advance);
    }

    isNotSectionOrEof(): boolean {
        return (
            this.hasNext() &&
            !this.is(section) &&
            !this.is(endsec) &&
            !this.is(eof)
        );
    }

    isNotTable(): boolean {
        return this.isNotSectionOrEof() && !this.is(table) && !this.is(endtab);
    }

    existInSpec(spec: SpecificationMap): boolean {
        return spec.has(this.peek().code);
    }

    hasError(): boolean {
        return this.error !== undefined;
    }

    expected(value: string, line: number): void {
        if (!this.hasError()) this.error = expected(value, line);
    }

    unexpected(value: string, line: number): void {
        if (!this.hasError()) this.error = unexpected(value, line);
    }

    endsec(): void {
        if (!this.is(endsec, true)) this.expected('ENDSEC', this.cline);
    }

    endtab(): void {
        if (!this.is(endtab, true)) this.expected('ENDTAB', this.cline);
    }
}
