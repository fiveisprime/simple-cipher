var cipher = require('../');

describe('simple-cipher', function () {

  it('should encrypt text with a password', function () {
    cipher.encrypt('test', 'test').should.equal('cc1fbd73cb93106c3358636ff619bdbd');
  });

  it('should decrypt text with a password', function () {
    cipher.decrypt('cc1fbd73cb93106c3358636ff619bdbd', 'test').should.equal('test');
  });

  it('should default the password when not provided', function () {
    cipher.encrypt('test').should.equal('9f331de65ebbc2dd57e0b1ac62873dd1');
    cipher.decrypt('9f331de65ebbc2dd57e0b1ac62873dd1').should.equal('test');
  });

});
