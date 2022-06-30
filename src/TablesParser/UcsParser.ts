import { ename } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';

export class UcsParser extends ParserBase {
    constructor() {
        super('UCS');
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotTable()) {
            tk.next();
        }
        tk.endtab();
    }

    match(tk: Tokenizer): boolean {
        return tk.is(ename(this.name), true);
    }
}
