"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
function random(min = 0, max = 100) {
    const rand = Math.random();
    return Math.floor(rand * Number(max) - Number(min))
        + Number(min);
}
exports.random = random;
