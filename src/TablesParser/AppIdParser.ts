import { AppIdRecord } from '../Interfaces';
import { AppIdRecordSpec } from '../Specifications';
import { TableParser } from './TableParser';

export class AppIdParser extends TableParser<AppIdRecord> {
    constructor() {
        super('APPID', AppIdRecordSpec);
    }
}
