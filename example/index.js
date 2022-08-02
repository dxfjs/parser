const { Parser } = require('../dist');
const { readFileSync } = require('fs');

const content = readFileSync('./specs/__dxfs__/noentities.dxf');
const parser = new Parser();
parser
    .parse(content.toString())
    .then((obj) => console.log(obj.blocks))
    .catch((error) => console.error(error));
