# parser

A dxf parser it parse dxf content to a readable javascript object.

![CI](https://github.com/dxfjs/parser/actions/workflows/ci.yml/badge.svg)

## Installation

```sh
pnpm add @dxfjs/parser
```

## Get started

```js
const { Parser } = require('@dxfjs/parser')
const content = '...' // The dxf content
const parser = new Parser()
parser
    .parse(content)
    .then((obj) => {
        console.log(obj)
        // ...
    })
    .catch((error) => console.error(error))
```


## Progress

- [x] Parse `HEADER` section.
- [x] Parse `CLASSES` section.
- [x] Parse `TABLES` section.
- [x] Parse `BLOCKS` section.
- [x] Parse `ENTITIES` section.
    <details><summary>Supported entities</summary>
  
    - [x] 3DFACE
    - [x] 3DSOLID
    - [x] ARC
    - [x] CIRCLE
    - [x] ELLIPSE
    - [ ] HATCH
    - [x] INSERT
    - [x] LINE
    - [x] LWPOLYLINE
    - [x] POINT
    - [x] POLYLINE
    - [x] SOLID
    - [x] SPLINE
    - [x] TEXT
  
    </details>
- [ ] Parse `OBJECTS` section.
