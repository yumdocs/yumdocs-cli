const command = require('./command');

describe('yumdocs', () => {
    beforeAll(() => {
       expect(process.env.NODE_ENV).toEqual('test');
    });

    it('Missing args', async () => {
        try {
            await command();
        } catch(err) {
            expect(err[1]).toEqual('Missing arguments');
        }
    });

    it('Template not found', async () => {
        try {
            await command('a b c');
        } catch(err) {
            expect(err[0]).toEqual('[31mFile not found[39m');
        }
    });

    it('JSON not found', async () => {
        try {
            await command('./tests/simple.docx b c');
        } catch(err) {
            expect(err[0]).toEqual('[31mData file \'b\' not found[39m');
        }
    });

    it('JSON malformed', async () => {
        try {
            await command('./tests/simple.docx ./authorize.sh c');
        } catch(err) {
            expect(err[0]).toEqual('[31mJSON syntax error in \'./authorize.sh\'[39m');
        }
    });

    it('Should work', async () => {
        try {
            console.log(__dirname);
            await command('./tests/simple.docx ./tests/data.json ./temp/output.docx');
        } catch(err) {
            // expect(err[0]).toEqual('[31mFile not found[39m');
        }
    });
});