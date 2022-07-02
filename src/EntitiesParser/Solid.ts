import { cZero, defineProperty, type } from '../Functional';
import { SolidEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { SolidEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Solid extends ParserBase {
    solids: SolidEntity[];
    constructor() {
        super('SOLID');
        this.solids = [];
    }

    parse(tk: Tokenizer): void {
        const face: SolidEntity = {} as SolidEntity;
        face.subclassMarker = [];
        while (tk.isNotSectionOrEof() && !tk.is(cZero)) {
            if (tk.existInSpec(SolidEntitySpec)) {
                defineProperty(tk, face, SolidEntitySpec);
            }
        }
        this.solids.push(face);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { solids: this.solids };
    }
}
