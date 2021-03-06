import { cZero, type } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';

export class Hatch extends ParserBase {
    constructor() {
        super('HATCH');
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            tk.next();
        }
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }
}
