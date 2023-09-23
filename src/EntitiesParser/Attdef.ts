import { cZero, defineProperty, type } from '../Functional';
import { AttdefEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { AttdefEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Attdef extends ParserBase {
    attdefs: AttdefEntity[];
    constructor() {
        super('ATTDEF');
        this.attdefs = [];
    }

    parse(tk: Tokenizer): void {
        const attdef: AttdefEntity = {} as AttdefEntity;
        attdef.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(AttdefEntitySpec)) {
                defineProperty(tk, attdef, AttdefEntitySpec);
            } else tk.next();
        }
        this.attdefs.push(attdef);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { attdefs: this.attdefs };
    }
}
