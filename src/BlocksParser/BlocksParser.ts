import { block, ename } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';
import { BlockParser } from './BlockParser';

export class BlocksParser extends ParserBase {
    blocks: string[];
    constructor() {
        super('BLOCKS');
        this.blocks = [];
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof()) {
            if (tk.is(block, true)) {
                const b = new BlockParser();
                b.parse(tk);
                this.blocks.push(b.name);
            }
            tk.next();
        }
        tk.endsec();
    }

    match(tk: Tokenizer): boolean {
        return tk.is(ename(this.name), true);
    }

    objectify() {
        return {
            blocks: this.blocks,
        };
    }
}
