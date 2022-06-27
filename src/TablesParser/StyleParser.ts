import { StyleRecord } from '../Interfaces';
import { StyleRecordSpec } from '../Specifications';
import { TableParser } from './TableParser';

export class StyleParser extends TableParser<StyleRecord> {
    constructor() {
        super('STYLE', StyleRecordSpec);
    }
}
