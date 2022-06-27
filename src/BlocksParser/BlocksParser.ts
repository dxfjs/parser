import { ename } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../tokenizer';

export class BlocksParser extends ParserBase {
    constructor() {
        super('BLOCKS');
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof()) {
            tk.next();
        }
        tk.endsec();
    }

    match(tk: Tokenizer): boolean {
        return tk.is(ename(this.name), true);
    }
}
