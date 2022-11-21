import { cZero, defineProperty, type } from '../Functional';
import { LineEntity } from '../Interfaces';
import { ParserBase } from '../ParserBase';
import { LineEntitySpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';

export class Line extends ParserBase {
    lines: LineEntity[];
    constructor() {
        super('LINE');
        this.lines = [];
    }

    parse(tk: Tokenizer): void {
        const line: LineEntity = {} as LineEntity;
        line.subclassMarker = [];
        while (tk.isNotSectionOrEof() && tk.isNot(cZero)) {
            if (tk.existInSpec(LineEntitySpec)) {
                defineProperty(tk, line, LineEntitySpec);
            } else tk.next();
        }
        this.lines.push(line);
    }

    match(tk: Tokenizer): boolean {
        return tk.is(type(this.name), true);
    }

    objectify() {
        return { lines: this.lines };
    }
}
