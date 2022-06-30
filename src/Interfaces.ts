import { DxfObj, tokens_t } from './Types';

export interface UnknownTokens {
    unknowns?: tokens_t;
}

export interface RecordCommons extends UnknownTokens {
    handle: string;
    ownerObjectHandle: string;
    subclassMarker: string[];
}

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

export interface DxfGlobalObject {
    header: DxfObj;
    tables: {
        appId: TableCommons<Partial<AppIdRecord>, false>;
        blockRecord: TableCommons<Partial<BlockRecord>, false>;
        dimStyle: TableCommons<Partial<DimStyleRecord>, true>;
        layer: TableCommons<Partial<LayerRecord>, false>;
        lType: TableCommons<Partial<LTypeRecord>, false>;
        style: TableCommons<Partial<StyleRecord>, false>;
    };
    classes: ClassRecord[];
}
