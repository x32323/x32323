export * from './modules/file';
export * from './modules/time';
export * from './modules/number';
import * as file from './modules/file';
import * as time from './modules/time';
import * as number from './modules/number';
export { file, time, number };
declare const _default: {
    file: typeof file;
    time: typeof time;
    number: typeof number;
};
export default _default;
export interface Modules {
    file: new () => typeof file;
    time: new () => typeof time;
    number: new () => typeof number;
}
