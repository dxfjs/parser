import { BlockRecord } from '../Interfaces';
import { BlockRecordSpec } from '../Specifications';
import { TableParser } from './TableParser';

export class BlockRecordParser extends TableParser<BlockRecord> {
    constructor() {
        super('BLOCK_RECORD', BlockRecordSpec);
    }
}
