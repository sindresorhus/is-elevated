/**
Check if the process is running with elevated privileges.

@example
```
import isElevated from 'is-elevated';

console.log(await isElevated());
//=> false
```
*/
export default function isElevated(): Promise<boolean>;
