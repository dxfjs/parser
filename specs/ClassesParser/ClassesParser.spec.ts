import { ClassesParser } from '../../src/ClassesParser/ClassesParser';
import { Tokenizer } from '../../src/Tokenizer';

describe('ClassesParser class', () => {
    let classes: ClassesParser;

    beforeEach(() => {
        classes = new ClassesParser();
    });

    it('should match the classes section', () => {
        const _content = `
            2
        CLASSES
            0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        expect(classes.match(tk)).toBeTruthy();
    });

    it('should return an empty classes array', () => {
        const _content = `
            2
        CLASSES
            0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        classes.match(tk);
        classes.parse(tk);
        expect(classes.objectify()).toEqual({ classes: [] });
    });

    it('should complain about ENDSEC not found', () => {
        const _content = `
            2
        CLASSES
        `;
        const tk = new Tokenizer(_content);
        classes.match(tk);
        classes.parse(tk);
        expect(tk.error).toBe('Expected ENDSEC at line 3.');
    });

    it('should parse one class', () => {
        const _content = `
            2
        CLASSES
            0
        CLASS
            1
        ACDBDICTIONARYWDFLT
            2
        AcDbDictionaryWithDefault
            3
        ObjectDBX Classes
            90
        0
            91
        1
            280
        0
            281
        0
            0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        classes.match(tk);
        classes.parse(tk);
        expect(classes.objectify()).toEqual({
            classes: [
                {
                    recordName: 'ACDBDICTIONARYWDFLT',
                    className: 'AcDbDictionaryWithDefault',
                    applicationName: 'ObjectDBX Classes',
                    proxyFlag: 0,
                    instanceCount: 1,
                    wasProxyFlag: 0,
                    isEntityFlag: 0,
                },
            ],
        });
    });

    it('should parse tow classes', () => {
        const _content = `
            2
        CLASSES
            0
        CLASS
            1
        DICTIONARYVAR
            2
        AcDbDictionaryVar
            3
        ObjectDBX Classes
            90
        0
            91
        10
            280
        0
            281
        0
            0
        CLASS
            1
        TABLESTYLE
            2
        AcDbTableStyle
            3
        ObjectDBX Classes
            90
        4095
            91
        1
            280
        0
            281
        0
            0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        classes.match(tk);
        classes.parse(tk);
        expect(classes.objectify()).toEqual({
            classes: [
                {
                    recordName: 'DICTIONARYVAR',
                    className: 'AcDbDictionaryVar',
                    applicationName: 'ObjectDBX Classes',
                    proxyFlag: 0,
                    instanceCount: 10,
                    wasProxyFlag: 0,
                    isEntityFlag: 0,
                },
                {
                    recordName: 'TABLESTYLE',
                    className: 'AcDbTableStyle',
                    applicationName: 'ObjectDBX Classes',
                    proxyFlag: 4095,
                    instanceCount: 1,
                    wasProxyFlag: 0,
                    isEntityFlag: 0,
                },
            ],
        });
    });
});
