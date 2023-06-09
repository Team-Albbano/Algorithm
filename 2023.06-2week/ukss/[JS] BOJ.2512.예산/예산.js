const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const area = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const M = +input[2];

let low = 0;
let high = area[area.length - 1];
let cnt = 0;

while (low <= high) {
    let mid = ~~((low + high) / 2);
    let data = area.map((el) => {
        if (el > mid) {
            return (el = mid);
        } else return el;
    });

    let tot = data.reduce((arr, cur) => (arr += cur), 0);

    if (tot <= M) {
        cnt = mid;
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

console.log(cnt);
