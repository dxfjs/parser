import { LayerRecord } from '../Interfaces';
import { LayerRecordSpec } from '../Specifications';
import { TableParser } from './TableParser';

export class LayerParser extends TableParser<LayerRecord> {
    constructor() {
        super('LAYER', LayerRecordSpec);
    }
}
