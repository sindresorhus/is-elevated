'use strict';
var isRoot = require('is-root');
var isAdmin = require('is-admin');

module.exports = function (cb) {
	if (process.platform === 'win32') {
		isAdmin()
			.then((admin) => cb(null, admin))
			.catch((err) => cb(err));
	} else {
		setImmediate(cb, null, isRoot());
	}
};
