import {serial as test} from 'ava';
import m from '.';

test('normal', async t => {
	t.false(await m());
});

if (process.platform === 'win32') {
	// TODO: Implement test on Windows
} else {
	test('elevated', async t => {
		const _ = process.getuid;
		process.getuid = () => 0;
		t.true(await m());
		process.getuid = _;
	});
}
