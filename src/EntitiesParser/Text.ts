import { cZero, defineProperty, type } from '../Functional';
import { TextEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { TextEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Text extends ParserBase {
    texts: TextEntity[];
    constructor() {
        super('TEXT');
        this.texts = [];
    }

    parse(tk: Tokenizer): void {
        const text: TextEntity = {} as TextEntity;
        text.subclassMarker = [];
        while (tk.isNotSectionOrEof() && !tk.is(cZero)) {
            if (tk.existInSpec(TextEntitySpec)) {
                defineProperty(tk, text, TextEntitySpec);
            } else tk.next();
        }
        this.texts.push(text);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { texts: this.texts };
    }
}
