const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () =>{
    it('Should generate an unique random indentification using crypto', () =>{
        const nBytesForUserProfile = 4;
        const id = generateUniqueId(nBytesForUserProfile);
        expect(id).toHaveLength(8);
    })
});