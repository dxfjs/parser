import { obj_t, point_t, tokens_t } from './Types';

export interface UnknownTokens {
    unknowns?: tokens_t;
}

export interface Commons {
    handle: string;
    ownerObjectHandle: string;
    subclassMarker: string[];
}

export interface RecordCommons extends UnknownTokens, Commons {}

export interface TableCommons<T, Multi> extends UnknownTokens {
    handle: string;
    ownerObjectHandle: string;
    subclassMarker: Multi extends true ? string[] : string;
    numberOfRecords: number;
    [key: string]:
        | any
        | {
              ownerDictionariesHandle?: string[];
          };
    records: T[];
}

export interface AppIdRecord extends RecordCommons {
    name: string;
    flags: number;
}

export interface BlockRecord extends RecordCommons {
    name: string;
    layoutObject: string;
    insertionUnits: number;
    explodability: number;
    scalability: number;
}

export interface DimStyleRecord extends RecordCommons {
    name: string;
    flags: number;
    DIMPOST: string;
    DIMAPOST: string;
    DIMSCALE: number;
    DIMASZ: number;
    DIMEXO: number;
    DIMDLI: number;
    DIMEXE: number;
    DIMRND: number;
    DIMDLE: number;
    DIMTP: number;
    DIMTM: number;
    DIMTXT: number;
    DIMCEN: number;
    DIMTSZ: number;
    DIMALTF: number;
    DIMLFAC: number;
    DIMTVP: number;
    DIMTFAC: number;
    DIMGAP: number;
    DIMALTRND: number;
    DIMTOL: number;
    DIMLIM: number;
    DIMTIH: number;
    DIMTOH: number;
    DIMSE1: number;
    DIMSE2: number;
    DIMTAD: number;
    DIMZIN: number;
    DIMAZIN: number;
    DIMALT: number;
    DIMALTD: number;
    DIMTOFL: number;
    DIMSAH: number;
    DIMTIX: number;
    DIMSOXD: number;
    DIMCLRD: number;
    DIMCLRE: number;
    DIMCLRT: number;
    DIMADEC: number;
    DIMDEC: number;
    DIMTDEC: number;
    DIMALTU: number;
    DIMALTTD: number;
    DIMAUNIT: number;
    DIMFRAC: number;
    DIMLUNIT: number;
    DIMDSEP: number;
    DIMTMOVE: number;
    DIMJUST: number;
    DIMSD1: number;
    DIMSD2: number;
    DIMTOLJ: number;
    DIMTZIN: number;
    DIMALTZ: number;
    DIMALTTZ: number;
    DIMFIT: number;
    DIMUPT: number;
    DIMATFIT: number;
    DIMTXSTY: string;
    DIMLDRBLK: string;
    DIMBLK: string;
    DIMBLK1: string;
    DIMBLK2: string;
    DIMLWD: number;
    DIMLWE: number;
}

export interface LayerRecord extends RecordCommons {
    name: string;
    flags: number;
    color: number;
    lineType: string;
    plottingFlag: number;
    lineweight: number;
    plotStyleNameObject: string;
    materialObject: string;
}

export interface LTypeElement {
    length: number;
    complexType: number;
    shapeNumber: number;
    styleObject: string;
    scale: number;
    rotation: number;
    offsetX: number;
    offsetY: number;
    text: string;
}

export interface LTypeRecord extends RecordCommons {
    name: string;
    flags: number;
    descriptive: string;
    alignmentCode: number;
    numberOfElements: number;
    patternLength: number;
    elements: LTypeElement[];
}

export interface StyleRecord extends RecordCommons {
    name: string;
    flags: number;
    textHeight: number;
    widthFactor: number;
    obliqueAngle: number;
    textGenerationFlags: number;
    lastHeight: number;
    primaryFontFile: string;
    bigFontFile: string;
    trueTypeFont: string;
}

export interface ClassRecord {
    recordName: string;
    className: string;
    applicationName: string;
    proxyFlag: number;
    instanceCount: number;
    wasProxyFlag: number;
    isEntityFlag: number;
}

export interface EntityCommons {
    handle: string;
    ownerBlockRecordHandle: string;
    subclassMarker: string[];
    inPaperSpace?: number;
    layoutTabName?: string;
    layerName?: string;
    linetypeName?: string;
    materialObjectHandle?: string;
    colorNumber?: number;
    lineweightEnumValue?: number;
    linetypeScale?: number;
    visibilty?: boolean;
    trueColor?: number;
    colorName?: string;
    transparency?: number;
    plotstyleObjectHandle?: string;
    shadowMode?: number;
}

export interface PointEntity extends EntityCommons {
    x: number;
    y: number;
    z: number;
    thickness?: number;
    xAxisAngle?: number;
}

export interface ArcEntity extends EntityCommons {
    thickness?: number;
    centerX: number;
    centerY: number;
    centerZ: number;
    radius: number;
    startAngle: number;
    endAngle: number;
}

export interface Face3DEntity extends EntityCommons {
    firstX: number;
    firstY: number;
    firstZ: number;
    secondX: number;
    secondY: number;
    secondZ: number;
    thirdX: number;
    thirdY: number;
    thirdZ: number;
    fourthX: number;
    fourthY: number;
    fourthZ: number;
    invisibleEdgeFlag?: number;
}

export interface Solid3DEntity extends EntityCommons {
    modelerFormatVersion: number;
    proprietaryData: string[];
    lastProprietrayData: string;
    historyObjectHandle: string;
}

export interface SolidEntity extends EntityCommons {
    firstX: number;
    firstY: number;
    firstZ: number;
    secondX: number;
    secondY: number;
    secondZ: number;
    thirdX: number;
    thirdY: number;
    thirdZ: number;
    fourthX: number;
    fourthY: number;
    fourthZ: number;
    thickness?: number;
}

export interface CircleEntity extends EntityCommons {
    thickness?: number;
    centerX: number;
    centerY: number;
    centerZ: number;
    radius: number;
}

export interface EllipseEntity extends EntityCommons {
    centerX: number;
    centerY: number;
    centerZ: number;
    majorAxisX: number;
    majorAxisY: number;
    majorAxisZ: number;
    ratioOfMinorAxisToMajorAxis: number;
    startParameter: number;
    endParameter: number;
}

export interface LWPolylineVertex {
    x: number;
    y: number;
    startingWidth: number;
    endWidth: number;
    bulge: number;
}

export interface LWPolylineEntity extends EntityCommons {
    numberOfVertices: number;
    flag: number;
    constantWidth: number;
    elevation: number;
    thickness: number;
    vertices: LWPolylineVertex[];
}

export interface LineEntity extends EntityCommons {
    thickness: number;
    startX: number;
    startY: number;
    startZ: number;
    endX: number;
    endY: number;
    endZ: number;
}

export interface TextEntity extends EntityCommons {
    thickness: number;
    firstAlignmentX: number;
    firstAlignmentY: number;
    firstAlignmentZ: number;
    textHeight: number;
    text: string;
    rotation: number;
    factorWidth: number;
    obliqueAngle: number;
    styleName: string;
    generationFlags: number;
    horizontalJustification: number;
    secondAlignmentendX: number;
    secondAlignmentendY: number;
    secondAlignmentendZ: number;
    verticalJustification: number;
}

export interface SplineEntity extends EntityCommons {
    normalVectorX: number;
    normalVectory: number;
    normalVectorZ: number;
    flags: number;
    degree: number;
    numberOfKnots: number;
    numberOfControlPoints: number;
    numberOfFitPoints: number;
    knotTolerance: number;
    controlPointTolerance: number;
    fitTolerance: number;
    startTangentX: number;
    startTangentY: number;
    startTangentZ: number;
    endTangentX: number;
    endTangentY: number;
    endTangentZ: number;
    knots: number[];
    weights: number[];
    controlPoints: point_t[];
    fitPoints: point_t[];
}

export interface Block extends Commons {
    layerName: string;
    name: string;
    typeFlags: number;
    basePointX: number;
    basePointY: number;
    basePointZ: number;
    name2: string;
    xRefPathName: string;
    description: string;
    entities: {
        points: PointEntity[];
        arcs: ArcEntity[];
        solid3ds: Solid3DEntity[];
        solids: SolidEntity[];
        circles: CircleEntity[];
        ellipses: EllipseEntity[];
        lwPolylines: LWPolylineEntity[];
        lines: LineEntity[];
        texts: TextEntity[];
    };
}

export interface DxfGlobalObject {
    header: obj_t;
    tables: {
        appId: TableCommons<Partial<AppIdRecord>, false>;
        blockRecord: TableCommons<Partial<BlockRecord>, false>;
        dimStyle: TableCommons<Partial<DimStyleRecord>, true>;
        layer: TableCommons<Partial<LayerRecord>, false>;
        lType: TableCommons<Partial<LTypeRecord>, false>;
        style: TableCommons<Partial<StyleRecord>, false>;
    };
    classes: ClassRecord[];
    blocks: Block[];
    entities: {
        points: PointEntity[];
        arcs: ArcEntity[];
        solid3ds: Solid3DEntity[];
        solids: SolidEntity[];
        circles: CircleEntity[];
        ellipses: EllipseEntity[];
        lwPolylines: LWPolylineEntity[];
        lines: LineEntity[];
        texts: TextEntity[];
    };
}
