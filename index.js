var crypto = require('crypto');

//
// Encrypt the specified text using the AES-256 algorithm with the specified
//    password.
// If no password is provided, a default password will be used for both
//    operations.
//
exports.encrypt = function (text, password) {
  var cipher  = crypto.createCipher('aes-256-cbc', password || '62e591d3')
    , crypted = cipher.update(text, 'utf8', 'hex');

  crypted += cipher.final('hex');

  return crypted;
};

//
// Decrypt the specified text using the AES-256 algorithm with the specified
//    password.
// If no password is provided, a default password will be used for both
//    operations.
//
exports.decrypt = function (text, password) {
  var decipher = crypto.createDecipher('aes-256-cbc', password || '62e591d3')
    , dec      = decipher.update(text, 'hex', 'utf8');

  dec += decipher.final('utf8');

  return dec;
};
