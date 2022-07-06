import { cZero, defineProperty, type } from '../Functional';
import { Solid3DEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { Solid3DEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Solid3D extends ParserBase {
    solid3ds: Solid3DEntity[];
    constructor() {
        super('3DFACE');
        this.solid3ds = [];
    }

    parse(tk: Tokenizer): void {
        const solid3d: Solid3DEntity = {} as Solid3DEntity;
        solid3d.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(Solid3DEntitySpec)) {
                defineProperty(tk, solid3d, Solid3DEntitySpec);
            } else tk.unexpected('code', tk.cline);
        }
        this.solid3ds.push(solid3d);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { solid3ds: this.solid3ds };
    }
}
