import { code, cZero, defineProperty, type, value } from '../Functional';
import { SplineEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import {
    SplineControlPointSpec,
    SplineEntitySpec,
    SplineFitPointSpec,
} from '../Specifications';
import { Tokenizer } from '../Tokenizer';
import { point_t } from '../Types';

export class Spline extends ParserBase {
    splines: SplineEntity[];
    constructor() {
        super('SPLINE');
        this.splines = [];
    }

    parse(tk: Tokenizer): void {
        const spline: SplineEntity = {} as SplineEntity;
        spline.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.is(code(10))) {
                this.parseControlPoints(tk, spline);
            } else if (tk.is(code(11))) {
                this.parseFitPoints(tk, spline);
            } else if (tk.is(code(40))) {
                if (!spline.knots) spline.knots = [];
                spline.knots.push(value(tk.next()) as number);
            } else if (tk.is(code(41))) {
                if (!spline.weights) spline.weights = [];
                spline.weights.push(value(tk.next()) as number);
            } else if (tk.existInSpec(SplineEntitySpec)) {
                defineProperty(tk, spline, SplineEntitySpec);
            } else tk.unexpected('code', tk.cline);
        }
        this.splines.push(spline);
    }

    private parseControlPoints(tk: Tokenizer, spline: SplineEntity) {
        if (!spline.controlPoints) spline.controlPoints = [];
        const controlPoint: point_t = {} as point_t;
        do {
            if (tk.existInSpec(SplineControlPointSpec)) {
                defineProperty(tk, controlPoint, SplineControlPointSpec);
            } else tk.next();
        } while (
            tk.isNotSectionOrEof() &&
            tk.isNot(cZero) &&
            tk.isNot(code(10))
        );
        spline.controlPoints.push(controlPoint);
    }

    private parseFitPoints(tk: Tokenizer, spline: SplineEntity) {
        if (!spline.fitPoints) spline.fitPoints = [];
        const fitPoint: point_t = {} as point_t;
        do {
            if (tk.existInSpec(SplineFitPointSpec)) {
                defineProperty(tk, fitPoint, SplineFitPointSpec);
            } else tk.next();
        } while (
            tk.isNotSectionOrEof() &&
            tk.isNot(cZero) &&
            tk.isNot(code(11))
        );
        spline.fitPoints.push(fitPoint);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { splines: this.splines };
    }
}
