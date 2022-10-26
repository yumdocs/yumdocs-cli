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

    // Read json file
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const __datapath = path.resolve(__dirname, '..', args.data);
    const data = await fs.promises.readFile(__datapath);

    // load template, render with data, and save output
    const t = new OpenXMLTemplate();
    await t.load(args.template);
    await t.render(JSON.parse(data.toString()));
    await t.saveAs(args.output);
}

export default cli;