'use strict';
var test = require('ava');
var isElevated = require('./');

test('normal', function (t) {
	t.plan(1);

	isElevated(function (err, elevated) {
		t.assert(!elevated);
	});
});

if (process.platform === 'win32') {
	// TODO: implement test on Windows
} else {
	test('elevated', function (t) {
		t.plan(1);

		var _ = process.getuid;

		process.getuid = function () {
			return 0;
		};

		isElevated(function (err, elevated) {
			process.getuid = _;
			t.assert(elevated);
		});
	});
}
