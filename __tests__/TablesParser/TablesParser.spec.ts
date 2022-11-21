import { TablesParser } from '../../src/TablesParser/TablesParser';
import { Tokenizer } from '../../src/Tokenizer';

describe('TablesParser class', () => {
    let tables: TablesParser;

    beforeEach(() => {
        tables = new TablesParser();
    });

    it('should match the classes section', () => {
        const _content = `
            2
        TABLES
            0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        expect(tables.match(tk)).toBeTruthy();
    });

    it('should return empty tables', () => {
        const _content = `
            2
        TABLES
            0
        ENDSEC
        `;
        const tk = new Tokenizer(_content);
        tables.match(tk);
        tables.parse(tk);
        expect(tables.objectify()).toEqual({
            tables: {
                appId: {
                    records: [],
                },
                blockRecord: {
                    records: [],
                },
                dimStyle: {
                    records: [],
                    subclassMarker: [],
                },
                lType: {
                    records: [],
                },
                layer: {
                    records: [],
                },
                style: {
                    records: [],
                },
            },
        });
    });
});
