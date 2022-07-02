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
        const face: Solid3DEntity = {} as Solid3DEntity;
        face.subclassMarker = [];
        while (tk.isNotSectionOrEof() && !tk.is(cZero)) {
            if (tk.existInSpec(Solid3DEntitySpec)) {
                defineProperty(tk, face, Solid3DEntitySpec);
            }
        }
        this.solid3ds.push(face);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { solid3ds: this.solid3ds };
    }
}
