import *as file from './modules/file';
import *as time  from './modules/time';
import *as number from './modules/number';

export {
    file as file,
    time as time,
    number as number
}

export default {
    "file": file,
    "time": time,
    "number": number
}

export interface Modules {
    file: new () => typeof file;
    time: new () => typeof time;
    number: new () => typeof number;
}



