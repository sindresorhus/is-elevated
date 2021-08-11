import {expectType} from 'tsd';
import isElevated from './index.js';

expectType<Promise<boolean>>(isElevated());
