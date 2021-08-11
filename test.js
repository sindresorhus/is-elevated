import process from 'node:process';
import test from 'ava';
import isElevated from './index.js';

test.serial('normal', async t => {
	t.false(await isElevated());
});

if (process.platform === 'win32') {
	// TODO: Implement test on Windows
} else {
	test.serial('elevated', async t => {
		const _ = process.getuid;
		process.getuid = () => 0;
		t.true(await isElevated());
		process.getuid = _;
	});
}
