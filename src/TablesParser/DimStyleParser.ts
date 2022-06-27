import { DimStyleRecord } from '../Interfaces';
import { DimStyleRecordSpec } from '../Specifications';
import { TableParser } from './TableParser';

export class DimStyleParser extends TableParser<DimStyleRecord, true> {
    constructor() {
        super('DIMSTYLE', DimStyleRecordSpec, true);
    }
}
