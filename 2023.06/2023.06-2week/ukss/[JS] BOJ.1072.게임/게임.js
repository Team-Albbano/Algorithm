const [X, Y] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const Z = ~~((100 * Y) / X);

let left = 1;
let right = 1000000000;
let match = Infinity;

while (left <= right) {
    let mid = ~~((left + right) / 2);
    let odds = ~~(100 * ((Y + mid) / (X + mid)));

    if (Z !== odds) {
        match = match > mid && mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(match === Infinity ? -1 : match);
