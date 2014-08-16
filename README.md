simple-cipher
=============

A simple cipher/decipher utility.

# Usage

Simple-Cipher includes two methods for creating and deciphering text. Each of
the methods accepts some text to encrypt/decrypt as well as an optional password
for encrypting/decrypting the text.

```js
var cipher = require('simple-cipher');

// Outputs:
//    cc1fbd73cb93106c3358636ff619bdbd
console.log(cipher.encrypt('test', 'test'));

// Outputs:
//    test
console.log(cipher.decrypt('cc1fbd73cb93106c3358636ff619bdbd', 'test'));
```

# License

The MIT License (MIT)

Copyright (c) 2014 Matt Hernandez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
