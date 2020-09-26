"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJsonStr = exports.isExists = exports.size = exports.write = exports.read = exports.dirFiles = void 0;
const fs = __importStar(require("fs"));
function states(dir) {
    return new Promise((resolve, reject) => {
        fs.stat(dir, function (err, isExist) {
            if (err) {
                reject(err);
            }
            resolve(isExist);
        });
    });
}
/**
 * @function readdir Get the all of file names from directory
 * @param dir The path of directory
 */
function dirFiles(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fs.readdir(dir, (err, file) => {
                if (err) {
                    reject(err);
                }
                resolve(file);
            });
        });
    });
}
exports.dirFiles = dirFiles;
function read(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fs.readFile(dir, (err, bufferDatas) => {
                if (err) {
                    reject(err);
                }
                else {
                    const datas = bufferDatas.toString();
                    resolve(isJsonStr(datas) ? JSON.parse(datas) : datas);
                }
            });
        });
    });
}
exports.read = read;
function write(dir, datas) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const writeData = (typeof datas == "object") ? JSON.stringify(datas) : datas;
            fs.writeFile(dir, writeData, function (err) {
                if (err) {
                    reject(err);
                }
                resolve('Write sucess!!!');
            });
        });
    });
}
exports.write = write;
function size(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        const stat = yield states(dir);
        return `${stat.size} bytes`;
    });
}
exports.size = size;
function isExists(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield states(dir);
            return true;
        }
        catch (error) {
            return false;
        }
    });
}
exports.isExists = isExists;
function isJsonStr(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.isJsonStr = isJsonStr;
// export default {
//     "dirFiles": dirFiles,
//     "read": read,
//     "write": write,
//     "size": size,
//     "isExists": isExists,
//     "isJsonStr": isJsonStr
// }
