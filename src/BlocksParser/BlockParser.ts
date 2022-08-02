import { block, endblk } from '../Functional';
import { Tokenizer } from '../Tokenizer';

export class BlockParser {
    name: string;
    constructor() {
        this.name = '';
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof() && tk.isNot(block) && tk.isNot(endblk)) {
            if (tk.peek().code === 2) {
                this.name = tk.next().value;
            }
            tk.next();
        }
    }
}
