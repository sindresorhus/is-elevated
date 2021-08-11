import process from 'node:process';
import isRoot from 'is-root';
import isAdmin from 'is-admin';

export default async function isElevated() {
	return process.platform === 'win32' ? isAdmin() : isRoot();
}
