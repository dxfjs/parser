import { block, ename } from '../Functional';
import { Block } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';
import { BlockParser } from './BlockParser';

export class BlocksParser extends ParserBase {
    blocks: Block[];
    constructor() {
        super('BLOCKS');
        this.blocks = [];
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof()) {
            if (tk.is(block, true)) {
                const bp = new BlockParser();
                bp.parse(tk);
                this.blocks.push(bp.objectify());
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
