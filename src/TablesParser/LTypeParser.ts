import { defineProperty, last, lTypeElement } from '../Functional';
import { LTypeElement, LTypeRecord } from '../Interfaces';
import { LTypeElementSpec, LTypeRecordSpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';
import { TableParser } from './TableParser';

export class LTypeParser extends TableParser<LTypeRecord> {
    constructor() {
        super('LTYPE', LTypeRecordSpec);
    }

    override parse(tk: Tokenizer): void {
        while (tk.isNotTable()) {
            if (!this.commonsParsed) this.parseCommons(tk);
            this.parseRecords(tk);
            this.parselTypeElements(tk);
        }
        tk.endtab();
    }

    private parselTypeElements(tk: Tokenizer) {
        while (tk.existInSpec(LTypeElementSpec)) {
            const records = this.table.records;
            const record = last(records);
            if (record) {
                if (tk.is(lTypeElement)) {
                    if (!record.elements) record.elements = [];
                    record.elements.push({} as LTypeElement);
                }
                const elements = record.elements;
                if (elements) {
                    const lastElement = last(elements);
                    if (lastElement)
                        defineProperty(tk, lastElement, LTypeElementSpec);
                    else tk.unexpected('code', tk.cline);
                } else tk.unexpected('code', tk.cline);
            } else tk.unexpected('code', tk.cline);
        }
    }
}
