import OpenXMLTemplate from '@yumdocs/yumdocs';

async function cli(args) {
    if (process.env.DEBUG) {
        console.dir(args);
    }
    const t = new OpenXMLTemplate();
    await t.load(args.template)
    await t.render(JSON.parse(args.data))
    await t.saveAs(args.output)
}

export default cli;