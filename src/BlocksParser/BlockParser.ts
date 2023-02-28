import { Arc } from '../EntitiesParser/Arc';
import { Circle } from '../EntitiesParser/Circle';
import { Ellipse } from '../EntitiesParser/Ellipse';
import { Face3D } from '../EntitiesParser/Face3D';
import { Hatch } from '../EntitiesParser/Hatch';
import { Insert } from '../EntitiesParser/Insert';
import { Line } from '../EntitiesParser/Line';
import { LWPolyline } from '../EntitiesParser/LWPolyline';
import { Point } from '../EntitiesParser/Point';
import { Polyline } from '../EntitiesParser/Polyline';
import { Seqend } from '../EntitiesParser/Seqend';
import { Solid } from '../EntitiesParser/Solid';
import { Solid3D } from '../EntitiesParser/Solid3D';
import { Spline } from '../EntitiesParser/Spline';
import { Text } from '../EntitiesParser/Text';
import { Vertex } from '../EntitiesParser/Vertex';
import {block, cZero, defineProperty, endblk} from '../Functional';
import { Block } from '../Interfaces';
import { BlockSpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class BlockParser {
    block: Block;
    face3d: Face3D;
    solid3d: Solid3D;
    arc: Arc;
    circle: Circle;
    ellipse: Ellipse;
    hatch: Hatch;
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
        this.block = {} as Block;
        this.face3d = new Face3D();
        this.solid3d = new Solid3D();
        this.arc = new Arc();
        this.circle = new Circle();
        this.ellipse = new Ellipse();
        this.hatch = new Hatch();
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
        this.parseBlock(tk);
        this.parseEntities(tk);
    }

    parseBlock(tk: Tokenizer) {
        this.block.subclassMarker = [];
        while (tk.isNot(cZero)) {
            defineProperty(tk, this.block, BlockSpec);
        }
    }

    parseEntities(tk: Tokenizer) {
        while (tk.isNotSectionOrEof() && tk.isNot(block) && tk.isNot(endblk)) {
            if (tk.is(cZero)) {
                if (this.face3d.match(tk)) this.face3d.parse(tk);
                else if (this.solid3d.match(tk)) this.solid3d.parse(tk);
                else if (this.arc.match(tk)) this.arc.parse(tk);
                else if (this.circle.match(tk)) this.circle.parse(tk);
                else if (this.ellipse.match(tk)) this.ellipse.parse(tk);
                else if (this.hatch.match(tk)) this.hatch.parse(tk);
                else if (this.insert.match(tk)) this.insert.parse(tk);
                else if (this.line.match(tk)) this.line.parse(tk);
                else if (this.lwPolyline.match(tk)) this.lwPolyline.parse(tk);
                else if (this.point.match(tk)) this.point.parse(tk);
                else if (this.polyline.match(tk)) this.polyline.parse(tk);
                else if (this.solid.match(tk)) this.solid.parse(tk);
                else if (this.spline.match(tk)) this.spline.parse(tk);
                else if (this.text.match(tk)) this.text.parse(tk);
                else tk.next();
            } else tk.next();
        }
    }

    objectify(): Block {
        return {
            ...this.block,
            entities: {
                ...this.face3d.objectify(),
                ...this.solid3d.objectify(),
                ...this.arc.objectify(),
                ...this.circle.objectify(),
                ...this.ellipse.objectify(),
                ...this.line.objectify(),
                ...this.lwPolyline.objectify(),
                ...this.polyline.objectify(),
                ...this.point.objectify(),
                ...this.solid.objectify(),
                ...this.spline.objectify(),
                ...this.text.objectify(),
            },
        };
    }
}
