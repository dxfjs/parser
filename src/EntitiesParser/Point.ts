import { cZero, defineProperty, type } from '../Functional';
import { PointEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { PointEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Point extends ParserBase {
    points: PointEntity[];
    constructor() {
        super('POINT');
        this.points = [];
    }

    parse(tk: Tokenizer): void {
        const point: PointEntity = {} as PointEntity;
        point.subclassMarker = [];
        while (tk.isNotSectionOrEof() && !tk.is(cZero)) {
            if (tk.existInSpec(PointEntitySpec)) {
                defineProperty(tk, point, PointEntitySpec);
            } else tk.unexpected('code', tk.cline);
        }
        this.points.push(point);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { points: this.points };
    }
}
