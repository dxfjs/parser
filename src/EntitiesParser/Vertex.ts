import {cZero, defineProperty, type} from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';
import { VertexEntity} from "../Interfaces";
import { VertexEntitySpec} from "../Specifications";

export class Vertex extends ParserBase {
    vertices: VertexEntity[];
    constructor() {
        super('VERTEX');
        this.vertices = [];
    }

    parse(tk: Tokenizer): void {
        const vertex: VertexEntity = {} as VertexEntity;
        vertex.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(VertexEntitySpec)) {
                defineProperty(tk, vertex, VertexEntitySpec);
            } else tk.next();
        }
        this.vertices.push(vertex);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { vertices: this.vertices };
    }
}
