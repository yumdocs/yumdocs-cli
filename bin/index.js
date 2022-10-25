#!/usr/bin/env node
require('yargs')
    .scriptName('yumdocs')
    .usage('$0 <cmd> [args]')
    .command(
        'hello [name]',
        'welcome ter yargs!',
        (yargs) => {
            yargs.positional('name', {
                type: 'string',
                default: 'Cambi',
                describe: 'the name to say hello to'
            })
        },
        require('../lib/index.js')
    )
    .help()
    .argv;