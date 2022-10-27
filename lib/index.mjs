import * as fs from 'node:fs';
import path from 'node:path';
import {YumTemplate} from '@yumdocs/yumdocs';

/**
 * cli
 * @param args
 * @returns {Promise<void>}
 */
async function cli(args) {
    if (process.env.DEBUG) {
        console.dir(args);
    }

    // load template
    const t = new YumTemplate();
    await t.load(args.template);

    // load data (TODO, consider this as a functionality of YumTemplate)
    const f = path.resolve(process.cwd(), args.data);
    let data = {};
    try {
        const buf = await fs.promises.readFile(f);
        data = JSON.parse(buf.toString());
    } catch (error) {
        // TODO Use a YumError and improve readFile vs JSON.parse error
        if (error instanceof SyntaxError) {
            throw new Error(`JSON syntax error in '${args.data}'`);
        } else {
            throw new Error(`Data file '${args.data}' not found`);
        }
    }

    // Render with data
    await t.render(data);

    // Save output
    await t.saveAs(args.output);
}

export default cli;