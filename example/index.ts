import { Parser } from '../src';
import { readFileSync } from 'node:fs';

const content = readFileSync('./__tests__/__dxfs__/noentities.dxf');
const parser = new Parser();
parser.parse(content.toString()).then(console.log).catch(console.error);
