import { spec_t } from './Types';

export function extend(target: spec_t, from: spec_t) {
    from.forEach((value, key) => {
        target.set(key, value);
    });
}

export const CommonsSpec: spec_t = new Map();
CommonsSpec.set(5, 'handle');
CommonsSpec.set(330, 'ownerObjectHandle');
CommonsSpec.set(100, 'subclassMarker');

export const TableCommonsSpec: spec_t = new Map();
extend(TableCommonsSpec, CommonsSpec);
TableCommonsSpec.set(70, 'numberOfRecords');

export const TableRecordCommonsSpec: spec_t = new Map();
extend(TableRecordCommonsSpec, CommonsSpec);

// APPID
export const AppIdRecordSpec: spec_t = new Map();
extend(AppIdRecordSpec, TableRecordCommonsSpec);
AppIdRecordSpec.set(2, 'name');
AppIdRecordSpec.set(70, 'flags');

// BLOCK_RECORD
export const BlockRecordSpec: spec_t = new Map();
extend(BlockRecordSpec, TableRecordCommonsSpec);
BlockRecordSpec.set(2, 'name');
BlockRecordSpec.set(340, 'layoutObject');
BlockRecordSpec.set(280, 'explodability');
BlockRecordSpec.set(281, 'scalability');
BlockRecordSpec.set(70, 'insertionUnits');

// LAYER
export const LayerRecordSpec: spec_t = new Map();
extend(LayerRecordSpec, TableRecordCommonsSpec);
LayerRecordSpec.set(2, 'name');
LayerRecordSpec.set(70, 'flags');
LayerRecordSpec.set(62, 'color');
LayerRecordSpec.set(6, 'lineType');
LayerRecordSpec.set(290, 'plottingFlag');
LayerRecordSpec.set(370, 'lineweight');
LayerRecordSpec.set(390, 'plotStyleNameObject');
LayerRecordSpec.set(347, 'materialObject');

// DIMSTYLE
export const DimStyleRecordSpec: spec_t = new Map();
extend(DimStyleRecordSpec, TableRecordCommonsSpec);
DimStyleRecordSpec.delete(5);
DimStyleRecordSpec.set(105, 'handle');
DimStyleRecordSpec.set(2, 'name');
DimStyleRecordSpec.set(70, 'flags');
DimStyleRecordSpec.set(3, 'DIMPOST');
DimStyleRecordSpec.set(4, 'DIMAPOST');
DimStyleRecordSpec.set(5, 'DIMBLK');
DimStyleRecordSpec.set(6, 'DIMBLK1');
DimStyleRecordSpec.set(7, 'DIMBLK2');
DimStyleRecordSpec.set(40, 'DIMSCALE');
DimStyleRecordSpec.set(41, 'DIMASZ');
DimStyleRecordSpec.set(42, 'DIMEXO');
DimStyleRecordSpec.set(43, 'DIMDLI');
DimStyleRecordSpec.set(44, 'DIMEXE');
DimStyleRecordSpec.set(45, 'DIMRND');
DimStyleRecordSpec.set(46, 'DIMDLE');
DimStyleRecordSpec.set(47, 'DIMTP');
DimStyleRecordSpec.set(48, 'DIMTM');
DimStyleRecordSpec.set(140, 'DIMTXT');
DimStyleRecordSpec.set(141, 'DIMCEN');
DimStyleRecordSpec.set(142, 'DIMTSZ');
DimStyleRecordSpec.set(143, 'DIMALTF');
DimStyleRecordSpec.set(144, 'DIMLFAC');
DimStyleRecordSpec.set(145, 'DIMTVP');
DimStyleRecordSpec.set(146, 'DIMTFAC');
DimStyleRecordSpec.set(147, 'DIMGAP');
DimStyleRecordSpec.set(148, 'DIMALTRND');
DimStyleRecordSpec.set(71, 'DIMTOL');
DimStyleRecordSpec.set(72, 'DIMLIM');
DimStyleRecordSpec.set(73, 'DIMTIH');
DimStyleRecordSpec.set(74, 'DIMTOH');
DimStyleRecordSpec.set(75, 'DIMSE1');
DimStyleRecordSpec.set(76, 'DIMSE2');
DimStyleRecordSpec.set(77, 'DIMTAD');
DimStyleRecordSpec.set(78, 'DIMZIN');
DimStyleRecordSpec.set(79, 'DIMAZIN');
DimStyleRecordSpec.set(170, 'DIMALT');
DimStyleRecordSpec.set(171, 'DIMALTD');
DimStyleRecordSpec.set(172, 'DIMTOFL');
DimStyleRecordSpec.set(173, 'DIMSAH');
DimStyleRecordSpec.set(174, 'DIMTIX');
DimStyleRecordSpec.set(175, 'DIMSOXD');
DimStyleRecordSpec.set(176, 'DIMCLRD');
DimStyleRecordSpec.set(177, 'DIMCLRE');
DimStyleRecordSpec.set(178, 'DIMCLRT');
DimStyleRecordSpec.set(179, 'DIMADEC');
DimStyleRecordSpec.set(270, 'DIMUNIT');
DimStyleRecordSpec.set(271, 'DIMDEC');
DimStyleRecordSpec.set(272, 'DIMTDEC');
DimStyleRecordSpec.set(273, 'DIMALTU');
DimStyleRecordSpec.set(274, 'DIMALTTD');
DimStyleRecordSpec.set(275, 'DIMAUNIT');
DimStyleRecordSpec.set(276, 'DIMFRAC');
DimStyleRecordSpec.set(277, 'DIMLUNIT');
DimStyleRecordSpec.set(278, 'DIMDSEP');
DimStyleRecordSpec.set(279, 'DIMTMOVE');
DimStyleRecordSpec.set(280, 'DIMJUST');
DimStyleRecordSpec.set(281, 'DIMSD1');
DimStyleRecordSpec.set(282, 'DIMSD2');
DimStyleRecordSpec.set(283, 'DIMTOLJ');
DimStyleRecordSpec.set(284, 'DIMTZIN');
DimStyleRecordSpec.set(285, 'DIMALTZ');
DimStyleRecordSpec.set(286, 'DIMALTTZ');
DimStyleRecordSpec.set(287, 'DIMFIT');
DimStyleRecordSpec.set(288, 'DIMUPT');
DimStyleRecordSpec.set(289, 'DIMATFIT');
DimStyleRecordSpec.set(340, 'DIMTXSTY');
DimStyleRecordSpec.set(341, 'DIMLDRBLK');
DimStyleRecordSpec.set(342, 'DIMBLK');
DimStyleRecordSpec.set(343, 'DIMBLK1');
DimStyleRecordSpec.set(344, 'DIMBLK2');
DimStyleRecordSpec.set(371, 'DIMLWD');
DimStyleRecordSpec.set(372, 'DIMLWE');

// STYLE
export const StyleRecordSpec: spec_t = new Map();
extend(StyleRecordSpec, TableRecordCommonsSpec);
StyleRecordSpec.set(2, 'name');
StyleRecordSpec.set(70, 'flags');
StyleRecordSpec.set(40, 'textHeight');
StyleRecordSpec.set(41, 'widthFactor');
StyleRecordSpec.set(50, 'obliqueAngle');
StyleRecordSpec.set(71, 'textGenerationFlags');
StyleRecordSpec.set(42, 'lastHeight');
StyleRecordSpec.set(3, 'primaryFontFile');
StyleRecordSpec.set(4, 'bigFontFile');
StyleRecordSpec.set(1071, 'trueTypeFont');

// LTYPE
export const LTypeRecordSpec: spec_t = new Map();
extend(LTypeRecordSpec, TableRecordCommonsSpec);
LTypeRecordSpec.set(2, 'name');
LTypeRecordSpec.set(70, 'flags');
LTypeRecordSpec.set(3, 'descriptive');
LTypeRecordSpec.set(72, 'alignmentCode');
LTypeRecordSpec.set(73, 'numberOfElements');
LTypeRecordSpec.set(40, 'patternLength');

// LTYPE Element
export const LTypeElementSpec: spec_t = new Map();
LTypeElementSpec.set(49, 'length');
LTypeElementSpec.set(74, 'complexType');
LTypeElementSpec.set(75, 'shapeNumber');
LTypeElementSpec.set(340, 'styleObject');
LTypeElementSpec.set(46, 'scale');
LTypeElementSpec.set(50, 'rotation');
LTypeElementSpec.set(44, 'offsetX');
LTypeElementSpec.set(45, 'offsetY');
LTypeElementSpec.set(9, 'text');

// Point
export const PointSpec: spec_t = new Map();
PointSpec.set(10, 'x');
PointSpec.set(20, 'y');
PointSpec.set(30, 'z');

// CLASS
export const ClassSpec: spec_t = new Map();
ClassSpec.set(1, 'recordName');
ClassSpec.set(2, 'className');
ClassSpec.set(3, 'applicationName');
ClassSpec.set(90, 'proxyFlag');
ClassSpec.set(91, 'instanceCount');
ClassSpec.set(280, 'wasProxyFlag');
ClassSpec.set(281, 'isEntityFlag');

export const EntityCommonsSpec: spec_t = new Map();
EntityCommonsSpec.set(5, 'handle');
EntityCommonsSpec.set(330, 'ownerBlockRecordHandle');
EntityCommonsSpec.set(100, 'subclassMarker');
EntityCommonsSpec.set(67, 'inPaperSpace');
EntityCommonsSpec.set(410, 'layoutTabName');
EntityCommonsSpec.set(8, 'layerName');
EntityCommonsSpec.set(6, 'linetypeName');
EntityCommonsSpec.set(347, 'materialObjectHandle');
EntityCommonsSpec.set(62, 'colorNumber');
EntityCommonsSpec.set(370, 'lineweightEnumValue');
EntityCommonsSpec.set(48, 'linetypeScale');
EntityCommonsSpec.set(60, 'visibilty');
// TODO Codes 92 and 310
EntityCommonsSpec.set(420, 'trueColor');
EntityCommonsSpec.set(430, 'colorName');
EntityCommonsSpec.set(440, 'transparency');
EntityCommonsSpec.set(390, 'plotstyleObjectHandle');
EntityCommonsSpec.set(284, 'shadowMode');

// POINT
export const PointEntitySpec: spec_t = new Map();
extend(PointEntitySpec, EntityCommonsSpec);
PointEntitySpec.set(10, 'x');
PointEntitySpec.set(20, 'y');
PointEntitySpec.set(30, 'z');
PointEntitySpec.set(39, 'thickness');
PointEntitySpec.set(50, 'xAxisAngle');

// ARC
export const ArcEntitySpec: spec_t = new Map();
extend(ArcEntitySpec, EntityCommonsSpec);
ArcEntitySpec.set(39, 'thickness');
ArcEntitySpec.set(10, 'centerX');
ArcEntitySpec.set(20, 'centerY');
ArcEntitySpec.set(30, 'centerZ');
ArcEntitySpec.set(40, 'radius');
ArcEntitySpec.set(50, 'startAngle');
ArcEntitySpec.set(51, 'endAngle');

// 3DFACE
export const Face3DEntitySpec: spec_t = new Map();
extend(Face3DEntitySpec, EntityCommonsSpec);
Face3DEntitySpec.set(10, 'firstX');
Face3DEntitySpec.set(20, 'firstY');
Face3DEntitySpec.set(30, 'firstZ');
Face3DEntitySpec.set(11, 'secondX');
Face3DEntitySpec.set(21, 'secondY');
Face3DEntitySpec.set(31, 'secondZ');
Face3DEntitySpec.set(12, 'thirdX');
Face3DEntitySpec.set(22, 'thirdY');
Face3DEntitySpec.set(32, 'thirdZ');
Face3DEntitySpec.set(13, 'fourthX');
Face3DEntitySpec.set(23, 'fourthY');
Face3DEntitySpec.set(33, 'fourthZ');
Face3DEntitySpec.set(70, 'invisibleEdgeFlag');

// 3DSOLID
export const Solid3DEntitySpec: spec_t = new Map();
extend(Solid3DEntitySpec, EntityCommonsSpec);
Solid3DEntitySpec.set(70, 'modelerFormatVersion');
Solid3DEntitySpec.set(1, 'proprietaryData');
Solid3DEntitySpec.set(3, 'lastProprietrayData');
Solid3DEntitySpec.set(350, 'historyObjectHandle');

// SOLID
export const SolidEntitySpec: spec_t = new Map();
extend(SolidEntitySpec, EntityCommonsSpec);
SolidEntitySpec.set(10, 'firstX');
SolidEntitySpec.set(20, 'firstY');
SolidEntitySpec.set(30, 'firstZ');
SolidEntitySpec.set(11, 'secondX');
SolidEntitySpec.set(21, 'secondY');
SolidEntitySpec.set(31, 'secondZ');
SolidEntitySpec.set(12, 'thirdX');
SolidEntitySpec.set(22, 'thirdY');
SolidEntitySpec.set(32, 'thirdZ');
SolidEntitySpec.set(13, 'fourthX');
SolidEntitySpec.set(23, 'fourthY');
SolidEntitySpec.set(33, 'fourthZ');
SolidEntitySpec.set(39, 'thickness');

// CIRCLE
export const CircleEntitySpec: spec_t = new Map();
extend(CircleEntitySpec, EntityCommonsSpec);
CircleEntitySpec.set(39, 'thickness');
CircleEntitySpec.set(10, 'centerX');
CircleEntitySpec.set(20, 'centerY');
CircleEntitySpec.set(30, 'centerZ');
CircleEntitySpec.set(40, 'radius');

// ELLIPSE
export const EllipseEntitySpec: spec_t = new Map();
extend(EllipseEntitySpec, EntityCommonsSpec);
EllipseEntitySpec.set(10, 'centerX');
EllipseEntitySpec.set(20, 'centerY');
EllipseEntitySpec.set(30, 'centerZ');
EllipseEntitySpec.set(11, 'majorAxisX');
EllipseEntitySpec.set(21, 'majorAxisY');
EllipseEntitySpec.set(31, 'majorAxisZ');
EllipseEntitySpec.set(40, 'ratioOfMinorAxisToMajorAxis');
EllipseEntitySpec.set(41, 'startParameter');
EllipseEntitySpec.set(42, 'endParameter');

// LWPOLYLINE
export const LWPolylineEntitySpec: spec_t = new Map();
extend(LWPolylineEntitySpec, EntityCommonsSpec);
LWPolylineEntitySpec.set(90, 'numberOfVertices');
LWPolylineEntitySpec.set(70, 'flag');
LWPolylineEntitySpec.set(43, 'constantWidth');
LWPolylineEntitySpec.set(38, 'elevation');
LWPolylineEntitySpec.set(39, 'thickness');

// LWPOLYLINE vertex
export const LWPolylineVertexSpec: spec_t = new Map();
LWPolylineVertexSpec.set(10, 'x');
LWPolylineVertexSpec.set(20, 'y');
LWPolylineVertexSpec.set(40, 'startingWidth');
LWPolylineVertexSpec.set(41, 'endWidth');
LWPolylineVertexSpec.set(42, 'bulge');

// POLYLINE
export const PolylineEntitySpec: spec_t = new Map();
extend(PolylineEntitySpec, EntityCommonsSpec);
PolylineEntitySpec.set(66, 'entitiesFollowFlag');
PolylineEntitySpec.set(10, 'x');
PolylineEntitySpec.set(20, 'y');
PolylineEntitySpec.set(30, 'z');
PolylineEntitySpec.set(39, 'thickness');
PolylineEntitySpec.set(70, 'flag');
PolylineEntitySpec.set(40, 'startingWidth');
PolylineEntitySpec.set(41, 'endWidth');
PolylineEntitySpec.set(71, 'mVertexCount');
PolylineEntitySpec.set(72, 'nVertexCount');
PolylineEntitySpec.set(73, 'mDensity');
PolylineEntitySpec.set(74, 'nDensity');
PolylineEntitySpec.set(75, 'curvesAndSmoothSurface');

// VERTEX
export const VertexEntitySpec: spec_t = new Map();
extend(VertexEntitySpec, EntityCommonsSpec);
VertexEntitySpec.set(10, 'x');
VertexEntitySpec.set(20, 'y');
VertexEntitySpec.set(30, 'z');
VertexEntitySpec.set(40, 'startingWidth');
VertexEntitySpec.set(41, 'endWidth');
VertexEntitySpec.set(42, 'bulge');
VertexEntitySpec.set(70, 'flag');
VertexEntitySpec.set(50, 'tangentDirection');
VertexEntitySpec.set(71, 'meshVertexIndex1');
VertexEntitySpec.set(72, 'meshVertexIndex2');
VertexEntitySpec.set(73, 'meshVertexIndex3');
VertexEntitySpec.set(74, 'meshVertexIndex4');
VertexEntitySpec.set(91, 'identifier');

// INSERT
export const InsertEntitySpec: spec_t = new Map();
extend(InsertEntitySpec, EntityCommonsSpec);
InsertEntitySpec.set(66, 'attributesFollowFlag');
InsertEntitySpec.set(2, 'blockName');
InsertEntitySpec.set(10, 'x');
InsertEntitySpec.set(20, 'y');
InsertEntitySpec.set(30, 'z');
InsertEntitySpec.set(41, 'xScale');
InsertEntitySpec.set(42, 'yScale');
InsertEntitySpec.set(43, 'zScale');
InsertEntitySpec.set(50, 'rotation');
InsertEntitySpec.set(70, 'columnCount');
InsertEntitySpec.set(71, 'rowCount');
InsertEntitySpec.set(44, 'columnSpacing');
InsertEntitySpec.set(45, 'rowSpacing');

// LINE
export const LineEntitySpec: spec_t = new Map();
extend(LineEntitySpec, EntityCommonsSpec);
LineEntitySpec.set(39, 'thickness');
LineEntitySpec.set(10, 'startX');
LineEntitySpec.set(20, 'startY');
LineEntitySpec.set(30, 'startZ');
LineEntitySpec.set(11, 'endX');
LineEntitySpec.set(21, 'endY');
LineEntitySpec.set(31, 'endZ');

// TEXT
export const TextEntitySpec: spec_t = new Map();
extend(TextEntitySpec, EntityCommonsSpec);
TextEntitySpec.set(39, 'thickness');
TextEntitySpec.set(10, 'firstAlignmentX');
TextEntitySpec.set(20, 'firstAlignmentY');
TextEntitySpec.set(30, 'firstAlignmentZ');
TextEntitySpec.set(40, 'textHeight');
TextEntitySpec.set(1, 'text');
TextEntitySpec.set(50, 'rotation');
TextEntitySpec.set(41, 'factorWidth');
TextEntitySpec.set(51, 'obliqueAngle');
TextEntitySpec.set(7, 'styleName');
TextEntitySpec.set(71, 'generationFlags');
TextEntitySpec.set(72, 'horizontalJustification');
TextEntitySpec.set(11, 'secondAlignmentendX');
TextEntitySpec.set(21, 'secondAlignmentendY');
TextEntitySpec.set(31, 'secondAlignmentendZ');
TextEntitySpec.set(73, 'verticalJustification');

// SPLINE
export const SplineEntitySpec: spec_t = new Map();
extend(SplineEntitySpec, EntityCommonsSpec);
SplineEntitySpec.set(210, 'normalVectorX');
SplineEntitySpec.set(220, 'normalVectory');
SplineEntitySpec.set(230, 'normalVectorZ');
SplineEntitySpec.set(70, 'flags');
SplineEntitySpec.set(71, 'degree');
SplineEntitySpec.set(72, 'numberOfKnots');
SplineEntitySpec.set(73, 'numberOfControlPoints');
SplineEntitySpec.set(74, 'numberOfFitPoints');
SplineEntitySpec.set(42, 'knotTolerance');
SplineEntitySpec.set(43, 'controlPointTolerance');
SplineEntitySpec.set(44, 'fitTolerance');
SplineEntitySpec.set(12, 'startTangentX');
SplineEntitySpec.set(22, 'startTangentY');
SplineEntitySpec.set(32, 'startTangentZ');
SplineEntitySpec.set(13, 'endTangentX');
SplineEntitySpec.set(23, 'endTangentY');
SplineEntitySpec.set(33, 'endTangentZ');

export const SplineControlPointSpec: spec_t = new Map();
SplineControlPointSpec.set(10, 'x');
SplineControlPointSpec.set(20, 'y');
SplineControlPointSpec.set(30, 'z');

export const SplineFitPointSpec: spec_t = new Map();
SplineFitPointSpec.set(11, 'x');
SplineFitPointSpec.set(21, 'y');
SplineFitPointSpec.set(31, 'z');

// SPLINE
export const BlockSpec: spec_t = new Map();
extend(BlockSpec, EntityCommonsSpec);
BlockSpec.set(8, 'layerName');
BlockSpec.set(2, 'name');
BlockSpec.set(70, 'typeFlags');
BlockSpec.set(10, 'basePointX');
BlockSpec.set(20, 'basePointY');
BlockSpec.set(30, 'basePointZ');
BlockSpec.set(3, 'name2');
BlockSpec.set(1, 'xRefPathName');
BlockSpec.set(4, 'description');
