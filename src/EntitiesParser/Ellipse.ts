import { cZero, defineProperty, type } from '../Functional';
import { EllipseEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { EllipseEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Ellipse extends ParserBase {
    ellipses: EllipseEntity[];
    constructor() {
        super('ELLIPSE');
        this.ellipses = [];
    }

    parse(tk: Tokenizer): void {
        const ellipse: EllipseEntity = {} as EllipseEntity;
        ellipse.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(EllipseEntitySpec)) {
                defineProperty(tk, ellipse, EllipseEntitySpec);
            } else tk.next();
        }
        this.ellipses.push(ellipse);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { ellipses: this.ellipses };
    }
}
