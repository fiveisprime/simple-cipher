var cipher = require('../');

describe('simple-cipher', function () {

  it('should encrypt text with a password', function () {
    cipher.encrypt('test', 'test').should.equal('cc1fbd73cb93106c3358636ff619bdbd');
  });

  it('should decrypt text with a password', function () {
    cipher.decrypt('cc1fbd73cb93106c3358636ff619bdbd', 'test').should.equal('test');
  });

});
