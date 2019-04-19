# is-elevated [![Build Status](https://travis-ci.org/sindresorhus/is-elevated.svg?branch=master)](https://travis-ci.org/sindresorhus/is-elevated)

> Check if the process is running with elevated privileges

By checking if the process [is root](https://github.com/sindresorhus/is-root) on Unix systems or if the user [is Administrator](https://github.com/sindresorhus/is-admin) on Windows.

Keep in mind that `root` and `Administrator` mean different things so this module might not be suitable for your use-case.


## Install

```
$ npm install is-elevated
```


## Usage

```js
const isElevated = require('is-elevated');

(async () => {
	console.log(await isElevated());
	//=> false
})();
```


## Related

- [sudo-block](https://github.com/sindresorhus/sudo-block) - Block users from running your app with root permissions


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
