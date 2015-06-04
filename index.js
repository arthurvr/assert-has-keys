'use strict';
var assert = require('assert');
var AssertionError = assert.AssertionError;

module.exports = function assertNoKeys(obj, keys) {
	if (!Array.isArray(keys)) {
		keys = [keys];
	}

	keys.forEach(function (key) {
		if (!obj.hasOwnProperty(key)) {
			throw new AssertionError({
				message: key + ' is missing'
			});
		}
	});
};
