import { ename } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';
import { Xline } from './Xline';
import { Wipeout } from './Wipeout';
import { Viewport } from './Viewport';
import { Vertex } from './Vertex';
import { Underlay } from './Underlay';
import { Trace } from './Trace';
import { Tolerance } from './Tolerance';
import { Text } from './Text';
import { Table } from './Table';
import { Surface } from './Surface';
import { Sun } from './Sun';
import { Spline } from './Spline';
import { Solid } from './Solid';
import { Shape } from './Shape';
import { Seqend } from './Seqend';
import { Section } from './Section';
import { Region } from './Region';
import { Ray } from './Ray';
import { Polyline } from './Polyline';
import { Point } from './Point';
import { Ole2frame } from './Ole2frame';
import { Oleframe } from './Oleframe';
import { Mtext } from './Mtext';
import { Mleader } from './Mleader';
import { Mleaderstyle } from './Mleaderstyle';
import { Mline } from './Mline';
import { Mesh } from './Mesh';
import { LWPolyline } from './LWPolyline';
import { Line } from './Line';
import { Light } from './Light';
import { Leader } from './Leader';
import { Insert } from './Insert';
import { Image } from './Image';
import { Helix } from './Helix';
import { Hatch } from './Hatch';
import { Ellipse } from './Ellipse';
import { Dimension } from './Dimension';
import { Circle } from './Circle';
import { Body } from './Body';
import { Attrib } from './Attrib';
import { Attdef } from './Attdef';
import { Arc } from './Arc';
import { AcadProxyEntity } from './AcadProxyEntity';
import { Solid3D } from './Solid3D';
import { Face3D } from './Face3D';

export class EntitiesParser extends ParserBase {
    face3D: Face3D;
    solid3D: Solid3D;
    acadProxyEntity: AcadProxyEntity;
    arc: Arc;
    attdef: Attdef;
    attrib: Attrib;
    body: Body;
    circle: Circle;
    dimension: Dimension;
    ellipse: Ellipse;
    hatch: Hatch;
    helix: Helix;
    image: Image;
    insert: Insert;
    leader: Leader;
    light: Light;
    line: Line;
    lwPolyline: LWPolyline;
    mesh: Mesh;
    mline: Mline;
    mleaderstyle: Mleaderstyle;
    mleader: Mleader;
    mtext: Mtext;
    oleframe: Oleframe;
    ole2frame: Ole2frame;
    point: Point;
    polyline: Polyline;
    ray: Ray;
    region: Region;
    section: Section;
    seqend: Seqend;
    shape: Shape;
    solid: Solid;
    spline: Spline;
    sun: Sun;
    surface: Surface;
    table: Table;
    text: Text;
    tolerance: Tolerance;
    trace: Trace;
    underlay: Underlay;
    vertex: Vertex;
    viewport: Viewport;
    wipeout: Wipeout;
    xline: Xline;
    constructor() {
        super('ENTITIES');
        this.face3D = new Face3D();
        this.solid3D = new Solid3D();
        this.acadProxyEntity = new AcadProxyEntity();
        this.arc = new Arc();
        this.attdef = new Attdef();
        this.attrib = new Attrib();
        this.body = new Body();
        this.circle = new Circle();
        this.dimension = new Dimension();
        this.ellipse = new Ellipse();
        this.hatch = new Hatch();
        this.helix = new Helix();
        this.image = new Image();
        this.insert = new Insert();
        this.leader = new Leader();
        this.light = new Light();
        this.line = new Line();
        this.lwPolyline = new LWPolyline();
        this.mesh = new Mesh();
        this.mline = new Mline();
        this.mleaderstyle = new Mleaderstyle();
        this.mleader = new Mleader();
        this.mtext = new Mtext();
        this.oleframe = new Oleframe();
        this.ole2frame = new Ole2frame();
        this.point = new Point();
        this.polyline = new Polyline();
        this.ray = new Ray();
        this.region = new Region();
        this.section = new Section();
        this.seqend = new Seqend();
        this.shape = new Shape();
        this.solid = new Solid();
        this.spline = new Spline();
        this.sun = new Sun();
        this.surface = new Surface();
        this.table = new Table();
        this.text = new Text();
        this.tolerance = new Tolerance();
        this.trace = new Trace();
        this.underlay = new Underlay();
        this.vertex = new Vertex();
        this.viewport = new Viewport();
        this.wipeout = new Wipeout();
        this.xline = new Xline();
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof()) {
            if (this.face3D.match(tk)) this.face3D.parse(tk);
            else if (this.solid3D.match(tk)) this.solid3D.parse(tk);
            else if (this.acadProxyEntity.match(tk))
                this.acadProxyEntity.parse(tk);
            else if (this.arc.match(tk)) this.arc.parse(tk);
            else if (this.attdef.match(tk)) this.attdef.parse(tk);
            else if (this.attrib.match(tk)) this.attrib.parse(tk);
            else if (this.body.match(tk)) this.body.parse(tk);
            else if (this.circle.match(tk)) this.circle.parse(tk);
            else if (this.dimension.match(tk)) this.dimension.parse(tk);
            else if (this.ellipse.match(tk)) this.ellipse.parse(tk);
            else if (this.hatch.match(tk)) this.hatch.parse(tk);
            else if (this.helix.match(tk)) this.helix.parse(tk);
            else if (this.image.match(tk)) this.image.parse(tk);
            else if (this.insert.match(tk)) this.insert.parse(tk);
            else if (this.leader.match(tk)) this.leader.parse(tk);
            else if (this.light.match(tk)) this.light.parse(tk);
            else if (this.line.match(tk)) this.line.parse(tk);
            else if (this.lwPolyline.match(tk)) this.lwPolyline.parse(tk);
            else if (this.mesh.match(tk)) this.mesh.parse(tk);
            else if (this.mline.match(tk)) this.mline.parse(tk);
            else if (this.mleaderstyle.match(tk)) this.mleaderstyle.parse(tk);
            else if (this.mleader.match(tk)) this.mleader.parse(tk);
            else if (this.mtext.match(tk)) this.mtext.parse(tk);
            else if (this.oleframe.match(tk)) this.oleframe.parse(tk);
            else if (this.ole2frame.match(tk)) this.ole2frame.parse(tk);
            else if (this.point.match(tk)) this.point.parse(tk);
            else if (this.polyline.match(tk)) this.polyline.parse(tk);
            else if (this.ray.match(tk)) this.ray.parse(tk);
            else if (this.region.match(tk)) this.region.parse(tk);
            else if (this.section.match(tk)) this.section.parse(tk);
            else if (this.seqend.match(tk)) this.seqend.parse(tk);
            else if (this.shape.match(tk)) this.shape.parse(tk);
            else if (this.solid.match(tk)) this.solid.parse(tk);
            else if (this.spline.match(tk)) this.spline.parse(tk);
            else if (this.sun.match(tk)) this.sun.parse(tk);
            else if (this.surface.match(tk)) this.surface.parse(tk);
            else if (this.table.match(tk)) this.table.parse(tk);
            else if (this.text.match(tk)) this.text.parse(tk);
            else if (this.tolerance.match(tk)) this.tolerance.parse(tk);
            else if (this.trace.match(tk)) this.trace.parse(tk);
            else if (this.underlay.match(tk)) this.underlay.parse(tk);
            else if (this.vertex.match(tk)) this.vertex.parse(tk);
            else if (this.viewport.match(tk)) this.viewport.parse(tk);
            else if (this.wipeout.match(tk)) this.wipeout.parse(tk);
            else if (this.xline.match(tk)) this.xline.parse(tk);
            else tk.unexpected('code', tk.cline);
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
            },
        };
    }
}
