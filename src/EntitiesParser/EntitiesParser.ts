import { ename } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';
import { Vertex } from './Vertex';
import { Text } from './Text';
import { Spline } from './Spline';
import { Solid } from './Solid';
import { Seqend } from './Seqend';
import { Polyline } from './Polyline';
import { Point } from './Point';
import { LWPolyline } from './LWPolyline';
import { Line } from './Line';
import { Insert } from './Insert';
import { Image } from './Image';
import { Hatch } from './Hatch';
import { Ellipse } from './Ellipse';
import { Circle } from './Circle';
import { Arc } from './Arc';
import { Solid3D } from './Solid3D';
import { Face3D } from './Face3D';

export class EntitiesParser extends ParserBase {
    face3D: Face3D;
    solid3D: Solid3D;
    arc: Arc;
    circle: Circle;
    ellipse: Ellipse;
    hatch: Hatch;
    image: Image;
    insert: Insert;
    line: Line;
    lwPolyline: LWPolyline;
    point: Point;
    polyline: Polyline;
    seqend: Seqend;
    solid: Solid;
    spline: Spline;
    text: Text;
    vertex: Vertex;
    constructor() {
        super('ENTITIES');
        this.face3D = new Face3D();
        this.solid3D = new Solid3D();
        this.arc = new Arc();
        this.circle = new Circle();
        this.ellipse = new Ellipse();
        this.hatch = new Hatch();
        this.image = new Image();
        this.insert = new Insert();
        this.line = new Line();
        this.lwPolyline = new LWPolyline();
        this.point = new Point();
        this.polyline = new Polyline();
        this.seqend = new Seqend();
        this.solid = new Solid();
        this.spline = new Spline();
        this.text = new Text();
        this.vertex = new Vertex();
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof()) {
            if (this.face3D.match(tk)) this.face3D.parse(tk);
            else if (this.solid3D.match(tk)) this.solid3D.parse(tk);
            else if (this.arc.match(tk)) this.arc.parse(tk);
            else if (this.circle.match(tk)) this.circle.parse(tk);
            else if (this.ellipse.match(tk)) this.ellipse.parse(tk);
            else if (this.hatch.match(tk)) this.hatch.parse(tk);
            else if (this.image.match(tk)) this.image.parse(tk);
            else if (this.insert.match(tk)) this.insert.parse(tk);
            else if (this.line.match(tk)) this.line.parse(tk);
            else if (this.lwPolyline.match(tk)) this.lwPolyline.parse(tk);
            else if (this.point.match(tk)) this.point.parse(tk);
            else if (this.polyline.match(tk)) this.polyline.parse(tk);
            else if (this.solid.match(tk)) this.solid.parse(tk);
            else if (this.spline.match(tk)) this.spline.parse(tk);
            else if (this.text.match(tk)) this.text.parse(tk);
            else tk.next();
        }
        tk.endsec();
    }

    match(tk: Tokenizer): boolean {
        return tk.is(ename(this.name), true);
    }

    objectify() {
        return {
            entities: {
                ...this.point.objectify(),
                ...this.arc.objectify(),
                ...this.face3D.objectify(),
                ...this.solid3D.objectify(),
                ...this.solid.objectify(),
                ...this.circle.objectify(),
                ...this.ellipse.objectify(),
                ...this.lwPolyline.objectify(),
                ...this.line.objectify(),
                ...this.text.objectify(),
            },
        };
    }
}
