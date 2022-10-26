const command = require('./command');

describe('yumdocs', () => {
    beforeAll(() => {
       expect(process.env.NODE_ENV).toEqual('test');
    });

    it('yumdocs - missing args', async () => {
        try {
            await command();
        } catch(err) {
            expect(err[1]).toEqual('Missing arguments');
        }
    });

    it('yumdocs - not a file', async () => {
        try {
            await command('a b c');
        } catch(err) {
            expect(err[0]).toEqual('[31mFile not found[39m');
        }
    });
});