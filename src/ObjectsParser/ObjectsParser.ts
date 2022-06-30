import { ename } from '../Functional';
import { ParserBase } from '../ParserBase';
import { Tokenizer } from '../Tokenizer';

export class ObjectsParser extends ParserBase {
    constructor() {
        super('OBJECTS');
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof()) {
            // if (tk.is(cZero)) {
            //     console.log(tk.next());
            // }
            tk.next();
        }
        tk.endsec();
    }

    match(tk: Tokenizer): boolean {
        return tk.is(ename(this.name), true);
    }
}
