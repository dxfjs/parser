import { defineProperty, ename, value, variable } from '../Functional';
import { ParserBase } from '../ParserBase';
import { PointSpec } from '../Specifications';
import { Tokenizer } from '../Tokenizer';
import { DxfObj } from '../Types';

export class HeaderParser extends ParserBase {
    variables: DxfObj;
    private currentVariable: string | null;
    constructor() {
        super('HEADER');
        this.variables = {};
        this.currentVariable = null;
    }

    parse(tk: Tokenizer): void {
        while (tk.isNotSectionOrEof()) {
            if (tk.is(variable)) {
                this.currentVariable = tk.next().value;
            }
            if (this.currentVariable) {
                if (tk.existInSpec(PointSpec)) {
                    if (!this.variables[this.currentVariable])
                        this.variables[this.currentVariable] = {};
                    this.parsePoint(tk);
                } else {
                    if (this.variables[this.currentVariable])
                        tk.unexpected('code', tk.cline);
                    else
                        this.variables[this.currentVariable] = value(tk.next());
                }
            } else tk.unexpected('code', tk.cline);
        }
        this.currentVariable = null;
        tk.endsec();
    }

    private parsePoint(tk: Tokenizer) {
        if (this.currentVariable) {
            defineProperty(tk, this.variables[this.currentVariable], PointSpec);
        }
    }

    match(tk: Tokenizer): boolean {
        return tk.is(ename(this.name), true);
    }

    objectify() {
        return {
            header: this.variables,
        };
    }
}
