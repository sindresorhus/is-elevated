/**
Check if the process is running with elevated privileges.

@example
```
import isElevated = require('is-elevated');

(async () => {
	console.log(await isElevated());
	//=> false
})();
```
*/
declare function isElevated(): Promise<boolean>;

export = isElevated;

