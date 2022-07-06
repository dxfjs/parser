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
    - [x] ARC
    - [x] CIRCLE
    - [x] ELLIPSE
    - [ ] HATCH
    - [ ] IMAGE
    - [ ] INSERT
    - [x] LINE
    - [x] LWPOLYLINE
    - [x] POINT
    - [ ] POLYLINE
    - [ ] SEQEND
    - [x] SOLID
    - [ ] SPLINE
    - [x] TEXT
    - [ ] VERTEX
  
    </details>
- [ ] Parse `OBJECTS` section.
