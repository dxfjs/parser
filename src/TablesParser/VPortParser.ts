import { ename } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../tokenizer';

export class VPortParser extends ParserBase {
    constructor() {
        super('VPORT');
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
