'use strict';
var assert = require('assert');
var assertHasKeys = require('./');

describe('assertHasKeys(object, \'key\')', function () {
	it('should pass when the object as the key', function () {
		assertHasKeys({foo: 'bar'}, 'foo');
		assertHasKeys({foo: false}, 'foo');
		assertHasKeys({foo: undefined}, 'foo');
	});

	it('should throw when the object doesn\'t have the key', function () {
		assert.throws(function () {
			assertHasKeys({foo: 'bar'}, 'foobar');
		});

		assert.throws(function () {
			assertHasKeys({foo: 'bar'}, 'bar');
		});
	});
});

describe('the assertion error', function () {
	it('should throw a valid assert.AssertionError', function () {
		try {
			assertHasKeys({foo: 'bar'}, 'bar');
		} catch (err) {
			assert(err instanceof assert.AssertionError);
		}
	});

	it('should have a good message', function () {
		try {
			assertHasKeys({foo: 'bar'}, 'bar');
		} catch (err) {
			assert.equal(err.message, 'bar is missing');
		}
	});
});

describe('assertHasKeys(object, [\'key1\', \'key1\'])', function () {
	it('should pass when all keys are in the object', function () {
		assertHasKeys({foo: 'bar', bar: 'foo'}, ['foo', 'bar']);
	});

	it('should fail if one key in the array isn\'t in the object', function () {
		assert.throws(function () {
			assertHasKeys({
				foo: 'foo',
				bar: 'bar'
			}, ['foo', 'bar', 'foobar']);
		});

		assert.throws(function () {
			assertHasKeys({
				foo: 'foo',
				bar: 'bar'
			}, ['foo', 'foobar', 'bar']);
		});
	});
});
