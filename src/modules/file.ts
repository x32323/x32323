import * as fs from 'fs';

function states(dir: string){
    return new Promise((resolve, reject) => {
        fs.stat(dir, function(err, isExist) {
            if(err){reject(err)}
            resolve(isExist);
        });
    });
}

/**
 * @function readdir Get the all of file names from directory
 * @param dir The path of directory
 */
export async function dirFiles(dir:string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, file) => {
            if(err){reject(err)}
            resolve(file);
        })
    });
}

export async function read(dir:string) :Promise <string|unknown>{
    return new Promise((resolve, reject) => {
        fs.readFile(dir, (err, bufferDatas) => {
            if(err){
                reject(err)
            }else{
                const datas = bufferDatas.toString();
                resolve(isJsonStr(datas) ? JSON.parse(datas) : datas);
            }
        })
    }); 
}

export async function write(dir:string, datas:string|any) :Promise<string>{
    return new Promise((resolve, reject) => {
        const writeData = (typeof datas == "object") ? JSON.stringify(datas) : datas;
        fs.writeFile(dir, writeData, function (err) {
            if (err) {reject(err)}
            resolve('Write sucess!!!')
        })
    });
}

export async function size(dir: string): Promise<string>{
    const stat:any = await states(dir);
    return `${stat.size} bytes`
}

export async function isExists(dir: string): Promise<boolean>{
    try {
        await states(dir);
        return true;
    } catch (error) {
        return false;
    }
}

export function isJsonStr(str: string): boolean{
    try {
        JSON.parse(str);
        return true;
    } catch(e) {
        return false;
    }
}

// export default {
//     "dirFiles": dirFiles,
//     "read": read,
//     "write": write,
//     "size": size,
//     "isExists": isExists,
//     "isJsonStr": isJsonStr
// }


