var Lab = require('lab');
var Code = require('code');

var lab = exports.lab = Lab.script();

var cipher = require('../');

lab.describe('simple-cipher', function () {

  lab.it('should encrypt text with a password', function (done) {
    Code.expect(cipher.encrypt('test', 'test')).to.equal('cc1fbd73cb93106c3358636ff619bdbd');

    done();
  });

  lab.it('should decrypt text with a password', function (done) {
    Code.expect(cipher.decrypt('cc1fbd73cb93106c3358636ff619bdbd', 'test')).to.equal('test');

    done();
  });

  lab.it('should default the password when not provided', function (done) {
    Code.expect(cipher.encrypt('test')).to.equal('9f331de65ebbc2dd57e0b1ac62873dd1');
    Code.expect(cipher.decrypt('9f331de65ebbc2dd57e0b1ac62873dd1')).to.equal('test');

    done();
  });

});
