import {cZero, defineProperty, type} from '../Functional';
import {ParserBase} from '../ParserBase';
import {Tokenizer} from '../Tokenizer';
import {PolylineEntitySpec} from "../Specifications";
import {PolylineEntity} from "../Interfaces";
import {Vertex} from "./Vertex";

export class Polyline extends ParserBase {
    polylines: PolylineEntity[];

    constructor() {
        super('POLYLINE');
        this.polylines = [];
    }

    parse(tk: Tokenizer): void {
        const polyline: PolylineEntity = {} as PolylineEntity;
        polyline.subclassMarker = [];
        const vertex = new Vertex();
        while (tk.isNotSectionOrEof() && (tk.is(type("VERTEX")) || tk.isNot(cZero))) {
            if (tk.existInSpec(PolylineEntitySpec)) {
                defineProperty(tk, polyline, PolylineEntitySpec);
            } else if (vertex.match(tk)) {
                vertex.parse(tk);
            } else tk.next();
        }
        polyline.vertices = vertex.vertices;
        this.polylines.push(polyline);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return {polylines: this.polylines};
    }
}
