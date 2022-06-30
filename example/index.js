const { Parser } = require('../lib');
const { readFileSync } = require('fs');

const content = readFileSync('./specs/examples/noentities.dxf');
const parser = new Parser();
parser
    .parse(content.toString())
    .then((obj) => console.log(obj.tables.dimStyle.unknowns))
    .catch((error) => console.error(error));
