import { cZero, type } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';

export class Mleader extends ParserBase {
    constructor() {
        super('MLEADER');
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof() && !tk.is(cZero)) {
            tk.next();
        }
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }
}