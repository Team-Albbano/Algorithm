const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, card, M, check] = input.map((v) => v.split(' ').map(Number));
card.sort((a, b) => a - b);

let isCheck = [];

for (let x of check) {
    let start = 0;
    let end = card.length - 1;
    let cnt = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (x === card[mid]) {
            cnt = 1;
            break;
        } else if (x < card[mid]) {
            end = mid - 1;
        } else start = mid + 1;
    }

    isCheck.push(cnt);
}

console.log(isCheck.join(' '));
