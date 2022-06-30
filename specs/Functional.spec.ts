import {
    numeric,
    lines,
    token,
    tokens,
    expected,
    unexpected,
} from '../src/Functional';

describe('lines function', () => {
    it('should return a empty array', () => {
        expect(lines('')).toEqual([]);
    });

    it('should return an array filled with 4 element', () => {
        expect(lines('0\nSECTION\n2\nHEADER').length).toBe(4);
    });

    it('should return an array filled with 4 correct element', () => {
        expect(lines('0\nSECTION\n2\nHEADER')).toEqual([
            '0',
            'SECTION',
            '2',
            'HEADER',
        ]);
    });
});

describe('expected function', () => {
    it('should return the correct message', () => {
        expect(expected('code', 1)).toBe('Expected code at line 1.');
    });
});

describe('unexpected function', () => {
    it('should return the correct message', () => {
        expect(unexpected('code', 1)).toBe('Unexpected code at line 1.');
    });
});

describe('token function', () => {
    it('should return a token object', () => {
        expect(token(0, 'SECTION', 1)).toEqual({
            code: 0,
            value: 'SECTION',
            line: 1,
        });
    });
});

describe('numeric function', () => {
    it('should return true', () => {
        expect(numeric('0')).toBeTruthy();
    });

    it('should return false', () => {
        expect(numeric('0l')).toBeFalsy();
    });
});

describe('tokens function', () => {
    it('should return an empty array', () => {
        expect(tokens(lines(''))).toEqual([]);
    });

    it('should return first error message', () => {
        expect(tokens(lines('0\nSECTION\n2K\nHEADER\n'))).toBe(
            'Expected code at line 3.'
        );
    });

    it('should return second error message', () => {
        expect(tokens(lines('0\nSECTION\n2\n'))).toBe(
            'Expected value at line 4.'
        );
    });

    it('should return 2 tokens', () => {
        expect(tokens(lines('0\nSECTION\n2\nHEADER\n')).length).toBe(2);
    });

    it('should return a valid token', () => {
        expect(tokens(lines('0\nSECTION\n'))).toEqual([
            {
                code: 0,
                value: 'SECTION',
                line: 1,
            },
        ]);
    });
});
