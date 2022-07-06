import { cZero, type } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';

export class Polyline extends ParserBase {
    constructor() {
        super('POLYLINE');
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
