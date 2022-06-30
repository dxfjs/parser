import {
    c102,
    c102End,
    cZero,
    defineProperty,
    ename,
    last,
    type,
} from '../Functional';
import { RecordCommons, TableCommons } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { TableCommonsSpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';
import { SpecificationMap } from '../Types';

export class TableParser<
    Record extends RecordCommons,
    Multi = false
> extends ParserBase {
    protected commonsParsed: boolean;
    readonly table: TableCommons<Partial<Record>, Multi>;
    readonly spec: SpecificationMap;

    constructor(
        name: string,
        spec: SpecificationMap,
        multipleSubclassMarkers = false
    ) {
        super(name);
        this.spec = spec;
        this.commonsParsed = false;
        this.table = {
            records: [] as Partial<Record>[],
        } as TableCommons<Partial<Record>, Multi>;
        if (multipleSubclassMarkers) {
            (this.table['subclassMarker'] as string[]) = [];
        }
    }

    match(tk: Tokenizer): boolean {
        return tk.is(ename(this.name), true);
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotTable()) {
            if (!this.commonsParsed) this.parseCommons(tk);
            if (tk.is(c102)) this.parse102(tk);
            this.parseRecords(tk);
        }
        tk.endtab();
    }

    protected parseCommons(tk: Tokenizer) {
        while (tk.isNotTable() && tk.isNot(cZero)) {
            if (tk.is(c102)) this.parse102(tk);
            defineProperty(tk, this.table, TableCommonsSpec);
        }
        this.commonsParsed = true;
    }

    private parse102(tk: Tokenizer) {
        const name = tk.next().value.replace('{', '');
        const ownerDictionariesHandle: string[] = [];
        while (tk.isNotTable() && tk.isNot(c102End, true)) {
            ownerDictionariesHandle.push(tk.next().value);
        }
        this.table[name] = { ownerDictionariesHandle };
    }

    protected parseRecords(tk: Tokenizer) {
        const records = this.table.records;
        if (tk.is(type(this.name))) {
            records.push({
                subclassMarker: [] as string[],
            } as Record);
            tk.next();
        }
        const record = last(records);
        if (record) defineProperty(tk, record, this.spec);
        else tk.unexpected('code', tk.cline);
    }
}
