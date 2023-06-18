const [KN, ...lan] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [K, N] = KN.split(' ').map(Number);
const lanLine = lan.map(Number).sort((a, b) => a - b);

let start = 0;
let end = lanLine[lanLine.length - 1];
let ans = 0;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let cnt = 0;

    for (let x of lanLine) {
        if (x >= mid) {
            cnt += Math.floor(x / mid);
        }
    }

    if (cnt >= N) {
        ans = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(ans);
