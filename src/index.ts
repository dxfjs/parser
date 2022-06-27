import { Parser } from './Parser';
import fs from 'fs';
//import util from 'node:util';

fs.readFile('./noentities.dxf', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error: ', err);
    } else {
        const parser = new Parser();
        parser
            .parse(data)
            //.then((v) => console.log(util.inspect(v, false, null, true)))
            .then((v) => console.log(v))
            .catch((error) => console.log(error));
    }
});
