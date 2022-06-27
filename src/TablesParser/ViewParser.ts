import { ename } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../tokenizer';

export class ViewParser extends ParserBase {
    constructor() {
        super('VIEW');
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
