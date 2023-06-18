const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [NM, tree] = input.map((v) => v.split(' ').map(Number));
const [N, M] = NM;
tree.sort((a, b) => a - b);

let start = 0;
let end = tree[tree.length - 1];
let ans = 0;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (let x of tree) {
        if (x > mid) {
            sum += x - mid;
        }
    }

    if (sum >= M) {
        ans = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(ans);
