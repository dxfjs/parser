import { cZero, defineProperty, type } from '../Functional';
import { ArcEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { ArcEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Arc extends ParserBase {
    arcs: ArcEntity[];
    constructor() {
        super('ARC');
        this.arcs = [];
    }

    parse(tk: Tokenizer): void {
        const arc: ArcEntity = {} as ArcEntity;
        arc.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(ArcEntitySpec)) {
                defineProperty(tk, arc, ArcEntitySpec);
            } else tk.unexpected('code', tk.cline);
        }
        this.arcs.push(arc);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { arcs: this.arcs };
    }
}
