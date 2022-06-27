import { defineProperty, eclass, ename } from '../Functional';
import { ClassRecord } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { ClassSpec } from '../Specifications';
import { Tokenizer } from '../tokenizer';

export class ClassesParser extends ParserBase {
    records: ClassRecord[];
    constructor() {
        super('CLASSES');
        this.records = [];
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof()) {
            if (tk.is(eclass, true)) {
                this.parseClass(tk);
            } else tk.unexpected('code', tk.cline);
        }
        tk.endsec();
    }

    parseClass(tk: Tokenizer) {
        const clas: ClassRecord = {} as ClassRecord;
        while (tk.existInSpec(ClassSpec)) {
            defineProperty(tk, clas, ClassSpec);
        }
        this.records.push(clas);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(ename(this.name), true);
    }

    objectify() {
        return {
            classes: this.records,
        };
    }
}
