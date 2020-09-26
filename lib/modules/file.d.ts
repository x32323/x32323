/**
 * @function readdir Get the all of file names from directory
 * @param dir The path of directory
 */
export declare function dirFiles(dir: string): Promise<string[]>;
export declare function read(dir: string): Promise<string | unknown>;
export declare function write(dir: string, datas: string | any): Promise<string>;
export declare function size(dir: string): Promise<string>;
export declare function isExists(dir: string): Promise<boolean>;
export declare function isJsonStr(str: string): boolean;
