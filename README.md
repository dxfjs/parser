# parser

A dxf parser it parse dxf content to a readable javascript object.

![CI](https://github.com/dxfjs/parser/actions/workflows/ci.yml/badge.svg)

## Get started

```
pnpm install

pnpm run build

pnpm run example
```

## Progress

- [x] Parse `HEADER` section.
- [x] Parse `CLASSES` section.
- [x] Parse `TABLES` section.
- [ ] Parse `BLOCKS` section.
- [x] Parse `ENTITIES` section.
    <details><summary>Supported entities</summary>
  
    - [x] 3DFACE
    - [x] 3DSOLID
    - [ ] ACAD_PROXY_ENTITY
    - [x] ARC
    - [ ] ATTDEF
    - [ ] ATTRIB
    - [ ] BODY
    - [x] CIRCLE
    - [ ] DIMENSION
    - [x] ELLIPSE
    - [ ] HATCH
    - [ ] HELIX
    - [ ] IMAGE
    - [ ] INSERT
    - [ ] LEADER
    - [ ] LIGHT
    - [x] LINE
    - [x] LWPOLYLINE
    - [ ] MESH
    - [ ] MLINE
    - [ ] MLEADERSTYLE
    - [ ] MLEADER
    - [ ] MTEXT
    - [ ] OLEFRAME
    - [ ] OLE2FRAME
    - [x] POINT
    - [ ] POLYLINE
    - [ ] RAY
    - [ ] REGION
    - [ ] SECTION
    - [ ] SEQEND
    - [ ] SHAPE
    - [x] SOLID
    - [ ] SPLINE
    - [ ] SUN
    - [ ] SURFACE
    - [ ] TABLE
    - [x] TEXT
    - [ ] TOLERANCE
    - [ ] TRACE
    - [ ] UNDERLAY
    - [ ] VERTEX
    - [ ] VIEWPORT
    - [ ] WIPEOUT
    - [ ] XLINE
  
    </details>
- [ ] Parse `OBJECTS` section.
