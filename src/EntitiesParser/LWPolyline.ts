import { code, cZero, defineProperty, type } from '../Functional';
import { LWPolylineEntity, LWPolylineVertex } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { LWPolylineEntitySpec, LWPolylineVertexSpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class LWPolyline extends ParserBase {
    lwPolylines: LWPolylineEntity[];
    constructor() {
        super('LWPOLYLINE');
        this.lwPolylines = [];
    }

    parse(tk: Tokenizer): void {
        const lwPolyline: LWPolylineEntity = {} as LWPolylineEntity;
        lwPolyline.subclassMarker = [];
        lwPolyline.vertices = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.is(code(10))) {
                this.parseVertex(tk, lwPolyline);
            } else if (tk.existInSpec(LWPolylineEntitySpec)) {
                defineProperty(tk, lwPolyline, LWPolylineEntitySpec);
            } else tk.next();
        }
        this.lwPolylines.push(lwPolyline);
    }

    parseVertex(tk: Tokenizer, lwPolyline: LWPolylineEntity) {
        const vertex: LWPolylineVertex = {} as LWPolylineVertex;
        do {
            if (tk.existInSpec(LWPolylineVertexSpec)) {
                defineProperty(tk, vertex, LWPolylineVertexSpec);
            } else tk.next();
        } while (
            tk.isNotSectionOrEof() &&
            tk.isNot(cZero) &&
            tk.isNot(code(10))
        );
        lwPolyline.vertices.push(vertex);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { lwPolylines: this.lwPolylines };
    }
}
