"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
function sleep(ms = 1000) {
    return new Promise(r => setTimeout(r, ms));
}
exports.sleep = sleep;
exports.default = {
    "sleep": sleep
};
