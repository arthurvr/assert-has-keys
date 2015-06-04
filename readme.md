# assert-has-keys [![Build Status](https://travis-ci.org/arthurvr/assert-has-keys.svg?branch=master)](https://travis-ci.org/arthurvr/assert-has-keys)

> Assert that an object has specific properties


## Install

```
$ npm install --save assert-has-keys
```


## Usage

```js
var assertHasKeys = require('assert-has-keys');

assertHasKeys({foo: 'bar'}, 'foo');
assertHasKeys({foo: 'bar'}, ['foo']);
assertHasKeys({foo: 'bar', bar: 'foo'}, ['bar', 'foo']);
//=> All do nothing

assertHasKeys({foo: 'bar', bar: 'foo'}, 'foobar');
assertHasKeys({foo: 'bar', bar: 'foo'}, ['foo', 'bar', 'foobar']);
//=> Will all throw an AssertionError
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
