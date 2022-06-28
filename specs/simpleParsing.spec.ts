import fs from 'fs'
import { Parser } from '../src';
import { expect } from 'vitest';
const noentitiesDXF = fs.readFileSync('./specs/examples/noentities.dxf')

describe('Parsing', () => {
    it('should parse header data', async () => {
        const parsedDXF = await new Parser().parse(noentitiesDXF.toString())
        expect(Object.values(parsedDXF.header).length).toBeGreaterThan(0)
    })
    it('should allow have a stable parsing', async () => {
        const parsedDXF = await new Parser().parse(noentitiesDXF.toString())
        expect(parsedDXF).toMatchSnapshot()
    })
})
