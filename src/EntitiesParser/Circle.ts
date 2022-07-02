import { cZero, defineProperty, type } from '../Functional';
import { CircleEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { CircleEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Circle extends ParserBase {
    circles: CircleEntity[];
    constructor() {
        super('CIRCLE');
        this.circles = [];
    }

    parse(tk: Tokenizer): void {
        const circle: CircleEntity = {} as CircleEntity;
        circle.subclassMarker = [];
        while (tk.isNotSectionOrEof() && !tk.is(cZero)) {
            if (tk.existInSpec(CircleEntitySpec)) {
                defineProperty(tk, circle, CircleEntitySpec);
            } else tk.unexpected('code', tk.cline);
        }
        this.circles.push(circle);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { circles: this.circles };
    }
}
