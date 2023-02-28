import {cZero, defineProperty, type} from '../Functional';
import {ParserBase} from '../ParserBase';
import {Tokenizer} from '../Tokenizer';
import {InsertEntity} from "../Interfaces";
import {InsertEntitySpec} from "../Specifications";

export class Insert extends ParserBase {
    inserts: InsertEntity[];

    constructor() {
        super('INSERT');
        this.inserts = [];
    }

    parse(tk: Tokenizer): void {
        const insert: InsertEntity = {} as InsertEntity;
        insert.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(InsertEntitySpec)) {
                defineProperty(tk, insert, InsertEntitySpec);
            } else tk.next();
        }
        this.inserts.push(insert);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return {inserts: this.inserts};
    }
}
