import {expectType} from 'tsd';
import isElevated = require('.');

expectType<Promise<boolean>>(isElevated());
