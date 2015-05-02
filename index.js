'use strict';
var isRoot = require('is-root');
var isAdmin = require('is-admin');

module.exports = function (cb) {
	if (process.platform === 'win32') {
		isAdmin(cb);
	} else {
		setImmediate(cb, null, isRoot());
	}
};
