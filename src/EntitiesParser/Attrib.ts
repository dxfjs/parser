import { cZero, defineProperty, type } from '../Functional';
import { AttribEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { AttribEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Attrib extends ParserBase {
    attribs: AttribEntity[];
    constructor() {
        super('ATTRIB');
        this.attribs = [];
    }

    parse(tk: Tokenizer): void {
        const attrib: AttribEntity = {} as AttribEntity;
        attrib.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(AttribEntitySpec)) {
                defineProperty(tk, attrib, AttribEntitySpec);
            } else tk.next();
        }
        this.attribs.push(attrib);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { attribs: this.attribs };
    }
}
