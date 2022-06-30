import { readFileSync } from 'fs';
import { Parser } from '../src';

const _content = readFileSync('./specs/__dxfs__/noentities.dxf');

describe('Parser class', () => {
    it('should parse header all header variables', async () => {
        const parsedDXF = await new Parser().parse(_content.toString());
        expect(Object.values(parsedDXF.header).length).toBe(251); // We have 251 variables in noentities.dxf 😉.
    });

    it('should have a stable parsing', async () => {
        const parsedDXF = await new Parser().parse(_content.toString());
        expect(parsedDXF).toMatchSnapshot();
    });
});
