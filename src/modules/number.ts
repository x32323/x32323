export function random(min = 0, max = 100): number{
    const rand = Math.random();
    return Math.floor(rand * Number(max) - Number(min))
        + Number(min);
}

// export default {
//     "random": random
// }