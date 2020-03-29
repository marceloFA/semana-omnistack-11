const crypto = require('crypto');

module.exports =  function generateUniqueId(nBytes){
    return crypto.randomBytes(nBytes).toString('HEX');
}