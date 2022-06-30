import { HeaderParser } from '../../src/HeaderParser/HeaderParser';
import { Tokenizer } from '../../src/tokenizer';

describe('HeaderParser class', () => {
    let header: HeaderParser;

    beforeEach(() => {
        header = new HeaderParser();
    });

    it('should match the header section', () => {
        const _content = `2
        HEADER
        0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        expect(header.match(tk)).toBeTruthy();
    });

    it('should return an empty header object', () => {
        const _content = `2
        HEADER
        0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        header.match(tk);
        header.parse(tk);
        expect(header.objectify()).toEqual({ header: {} });
    });

    it('should return header object with one variable', () => {
        const _content = `2
        HEADER
        9
        $ACADVER
        1
        AC1021
        0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        header.match(tk);
        header.parse(tk);
        expect(header.objectify()).toEqual({
            header: {
                $ACADVER: 'AC1021',
            },
        });
    });

    it('should complain about ENDSEC not found', () => {
        const _content = `2
        HEADER
        `;
        const tk = new Tokenizer(_content);
        header.match(tk);
        header.parse(tk);
        expect(tk.error).toBe('Expected ENDSEC at line 3.');
    });

    it('should return header object with tree variable', () => {
        const _content = `2
        HEADER
        9
        $ACADVER
        1
        AC1021
        9
        $INSBASE
        10
        0.0
        20
        0.0
        30
        0.0
        9
        $PLIMMAX
        10
        12.0
        20
        9.0
        0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        header.match(tk);
        header.parse(tk);
        expect(header.objectify()).toEqual({
            header: {
                $ACADVER: 'AC1021',
                $INSBASE: {
                    x: 0,
                    y: 0,
                    z: 0,
                },
                $PLIMMAX: {
                    x: 12,
                    y: 9,
                },
            },
        });
    });
});
