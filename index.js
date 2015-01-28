var crypto = require('crypto');

//
// Encrypt or decrypt the specified text using the AES-256 algorithm with the
//    specified password.
// If no password is provided, a default password will be used.
//
function run(type, text, password) {
  var cipher   = crypto.createCipher('aes-256-cbc', password || '62e591d3');
  var decipher = crypto.createDecipher('aes-256-cbc', password || '62e591d3');

  if ('encrypt' === type) {
    return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
  }

  if ('decrypt' === type) {
    return decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
  }
}

exports.encrypt = run.bind(this, 'encrypt');
exports.decrypt = run.bind(this, 'decrypt');
