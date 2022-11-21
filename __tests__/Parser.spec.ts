import { Parser } from '../src';
import { readFileSync } from 'fs';

const _content = readFileSync('./__tests__/__dxfs__/noentities.dxf');

describe('Parser class', () => {
    it('should parse all header variables', async () => {
        const dxfObj = await new Parser().parse(_content.toString());
        expect(Object.values(dxfObj.header).length).toBe(251); // We have 251 variables in noentities.dxf 😉.
    });

    it('should have a stable parsing', async () => {
        const dxfObj = await new Parser().parse(_content.toString());
        expect(dxfObj).toMatchSnapshot();
    });
});
