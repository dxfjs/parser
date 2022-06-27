import { ename, table } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../tokenizer';
import { AppIdParser } from './AppIdParser';
import { BlockRecordParser } from './BlockRecordParser';
import { DimStyleParser } from './DimStyleParser';
import { LayerParser } from './LayerParser';
import { LTypeParser } from './LTypeParser';
import { StyleParser } from './StyleParser';
import { UcsParser } from './UcsParser';
import { ViewParser } from './ViewParser';
import { VPortParser } from './VPortParser';

export class TablesParser extends ParserBase {
    appId: AppIdParser;
    blockRecord: BlockRecordParser;
    dimStyle: DimStyleParser;
    layer: LayerParser;
    lType: LTypeParser;
    style: StyleParser;
    ucs: UcsParser;
    view: ViewParser;
    vPort: VPortParser;
    constructor() {
        super('TABLES');
        this.appId = new AppIdParser();
        this.blockRecord = new BlockRecordParser();
        this.dimStyle = new DimStyleParser();
        this.layer = new LayerParser();
        this.lType = new LTypeParser();
        this.style = new StyleParser();
        this.ucs = new UcsParser();
        this.view = new ViewParser();
        this.vPort = new VPortParser();
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof()) {
            if (tk.is(table, true)) {
                if (this.appId.match(tk)) this.appId.parse(tk);
                else if (this.blockRecord.match(tk)) this.blockRecord.parse(tk);
                else if (this.dimStyle.match(tk)) this.dimStyle.parse(tk);
                else if (this.layer.match(tk)) this.layer.parse(tk);
                else if (this.lType.match(tk)) this.lType.parse(tk);
                else if (this.style.match(tk)) this.style.parse(tk);
                else if (this.ucs.match(tk)) this.ucs.parse(tk);
                else if (this.view.match(tk)) this.view.parse(tk);
                else if (this.vPort.match(tk)) this.vPort.parse(tk);
                else tk.unexpected('code', tk.cline);
            } else tk.unexpected('code', tk.cline);
        }
        tk.endsec();
    }

    match(tk: Tokenizer): boolean {
        return tk.is(ename(this.name), true);
    }

    objectify() {
        return {
            tables: {
                appId: this.appId.table,
                blockRecord: this.blockRecord.table,
                dimStyle: this.dimStyle.table,
                layer: this.layer.table,
                lType: this.lType.table,
                style: this.style.table,
            },
        };
    }
}
