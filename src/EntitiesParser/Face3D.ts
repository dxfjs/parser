import { cZero, defineProperty, type } from '../Functional';
import { Face3DEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { Face3DEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Face3D extends ParserBase {
    face3ds: Face3DEntity[];
    constructor() {
        super('3DFACE');
        this.face3ds = [];
    }

    parse(tk: Tokenizer): void {
        const face: Face3DEntity = {} as Face3DEntity;
        face.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(Face3DEntitySpec)) {
                defineProperty(tk, face, Face3DEntitySpec);
            } else tk.next();
        }
        this.face3ds.push(face);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { face3ds: this.face3ds };
    }
}
