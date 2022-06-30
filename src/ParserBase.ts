import { Tokenizer } from './Tokenizer';

export abstract class ParserBase {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract parse(tk: Tokenizer): void;

    abstract match(tk: Tokenizer): boolean;
}
