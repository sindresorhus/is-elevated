import {serial as test} from 'ava';
import isElevated from '.';

test('normal', async t => {
	t.false(await isElevated());
});

if (process.platform === 'win32') {
	// TODO: Implement test on Windows
} else {
	test('elevated', async t => {
		const _ = process.getuid;
		process.getuid = () => 0;
		t.true(await isElevated());
		process.getuid = _;
	});
}
