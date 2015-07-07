'use strict';
var assert = require('assert');
var arrify = require('arrify');
var AssertionError = assert.AssertionError;

module.exports = function (obj, keys) {
	arrify(keys).forEach(function (key) {
		if (typeof key !== 'string') {
			throw new TypeError('assert-has-keys expects keys to be strings');
		}

		if (!obj.hasOwnProperty(key)) {
			throw new AssertionError({
				message: key + ' property is missing'
			});
		}
	});
};
