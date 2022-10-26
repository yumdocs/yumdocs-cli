import * as fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import OpenXMLTemplate from '@yumdocs/yumdocs';

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
    const t = new OpenXMLTemplate();
    await t.load(args.template);

    // load data
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const __datapath = path.resolve(__dirname, '..', args.data);
    let data = {};
    try {
        const buf = await fs.promises.readFile(__datapath);
        data = JSON.parse(buf.toString());
    } catch (error) {
        // TODO Use an OpenXMLError and improve readFile vs JSON.parse error
        if (error instanceof SyntaxError) {
            throw new Error(`JSON syntax error in '${args.data}'`);
        } else {
            throw new Error(`Data file '${__datapath}' not found`);
        }
    }

    // Render with data
    await t.render(data);

    // Save output
    await t.saveAs(args.output);
}

export default cli;