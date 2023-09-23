import { endsec, eof, section } from './Functional';

import { BlocksParser } from './BlocksParser/BlocksParser';
import { ClassesParser } from './ClassesParser/ClassesParser';
import { DxfGlobalObject } from './Interfaces';
import { EntitiesParser } from './EntitiesParser/EntitiesParser';
import { HeaderParser } from './HeaderParser/HeaderParser';
import { ObjectsParser } from './ObjectsParser/ObjectsParser';
import { TablesParser } from './TablesParser/TablesParser';
import { Tokenizer } from './Tokenizer';

export class Parser {
    readonly header: HeaderParser;
    readonly classes: ClassesParser;
    readonly tables: TablesParser;
    readonly blocks: BlocksParser;
    readonly entities: EntitiesParser;
    readonly objects: ObjectsParser;
    constructor() {
        this.header = new HeaderParser();
        this.classes = new ClassesParser();
        this.tables = new TablesParser();
        this.blocks = new BlocksParser();
        this.entities = new EntitiesParser();
        this.objects = new ObjectsParser();
    }

    parse(content: string): Promise<DxfGlobalObject> {
        return new Promise((resolve, reject) => {
            const tk = new Tokenizer(content);
            while (tk.hasNext()) {
                if (tk.is(eof)) break;
                if (tk.is(section, true)) {
                    if (this.header.match(tk)) this.header.parse(tk);
                    else if (this.classes.match(tk)) this.classes.parse(tk);
                    else if (this.tables.match(tk)) this.tables.parse(tk);
                    else if (this.blocks.match(tk)) this.blocks.parse(tk);
                    else if (this.entities.match(tk)) this.entities.parse(tk);
                    else if (this.objects.match(tk)) this.objects.parse(tk);
                    else while (!tk.is(endsec, true)) tk.next();
                } else tk.expected('SECTION', tk.vline);
                if (!tk.hasNext()) tk.expected('EOF', tk.vline);
            }
            if (tk.hasError()) reject(tk.error);
            resolve({
                ...this.header.objectify(),
                ...this.classes.objectify(),
                ...this.tables.objectify(),
                ...this.blocks.objectify(),
                ...this.entities.objectify(),
            });
        });
    }
}
