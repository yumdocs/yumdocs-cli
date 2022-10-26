// https://javascript.plainenglish.io/how-to-test-a-node-js-command-line-tool-2735ea7dc041
const { fork } = require('node:child_process');

const command = (argv = '', options = {}) => new Promise((resolve, reject) => {
    // fork is much more stable than spawn because it starts a new v8 JVM instead of a new node instance
    // the drawback is we do not have access to stdout and stderr, so we need process.send and child.on
    const child = fork('./bin/yumdocs.mjs', argv.trim().split(/\s+/), options);
    const messages = [];
    child.on('message', (message) => {
        messages.push(message);
    });
    child.once('close', (code) => {
        if (code === 0) {
            resolve();
        } else {
            reject(messages);
        }
    });
});

module.exports = command;