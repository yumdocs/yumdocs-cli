#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2))
    .scriptName('yumdocs')
    .usage('Usage: $0 -t [path] -d [path] -o [path]\nShortcut: $0 <template> <data> <output>')
    .options({
        't': {
            alias: 'template',
            // demandOption: true, // incompatible with check
            describe: 'The path to an Office document containing Yumdocs tags.',
            type: 'string'
        },
        'd': {
            alias: 'data',
            // demandOption: true, // incompatible with check
            describe: 'The path to a JSON file.',
            type: 'string'
        },
        'o': {
            alias: 'output',
            // demandOption: true, // incompatible with check
            describe: 'The path to the output Office document with merged data.',
            type: 'string'
        }
    })
    .check((argv, options) => {
        const path = argv._;
        // Implement shortcut yumdocs <template> <data> <output>
        if (path.length === 3 && !argv.template && !argv.data && !argv.output) {
            argv.t = path[0];
            argv.template = path[0];
            argv.d = path[1];
            argv.data = path[1];
            argv.o = path[2];
            argv.output = path[2];
        }
        if (argv.template && argv.data && argv.output) return true; // tell Yargs that the arguments passed the check
        throw new Error('Missing arguments');
    })
    .argv;

require('../lib/index.js')(argv);