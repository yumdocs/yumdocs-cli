const OpenXMLTemplate = require('@yumdocs/yumdocs');

module.exports = function cli(args) {
    if (process.env.DEBUG) {
        console.dir(args);
    }
    const t = new OpenXMLTemplate();
    t.load(args.template)
        .then(() => {
            t.render(JSON.parse(args.data))
                .then(() => {
                    t.saveAs(args.output)
                        .then(() => {
                            process.exit(0);
                        });
                });
        });
};