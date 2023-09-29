import { cZero, defineProperty, type } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';
import { InsertEntity } from '../Interfaces';
import { InsertEntitySpec } from '../Specifications';
import { Attrib } from './Attrib';
import { Seqend } from './Seqend';

export class Insert extends ParserBase {
    inserts: InsertEntity[];
    attrib: Attrib;
    seqend: Seqend;

    constructor() {
        super('INSERT');
        this.inserts = [];
        this.attrib = new Attrib();
        this.seqend = new Seqend();
    }

    parse(tk: Tokenizer): void {
        const insert: InsertEntity = {} as InsertEntity;
        insert.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(InsertEntitySpec)) {
                defineProperty(tk, insert, InsertEntitySpec);
            } else tk.next();
        }
        if (insert.attributesFollowFlag === 1) {
            while (this.attrib.match(tk)) this.attrib.parse(tk);
            if (this.seqend.match(tk)) this.seqend.parse(tk);
        }
        insert.attribs = this.attrib.attribs;
        this.inserts.push(insert);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { inserts: this.inserts };
    }
}
