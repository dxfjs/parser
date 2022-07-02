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
        const solid: SolidEntity = {} as SolidEntity;
        solid.subclassMarker = [];
        while (tk.isNotSectionOrEof() && !tk.is(cZero)) {
            if (tk.existInSpec(SolidEntitySpec)) {
                defineProperty(tk, solid, SolidEntitySpec);
            } else tk.unexpected('code', tk.cline);
        }
        this.solids.push(solid);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { solids: this.solids };
    }
}
