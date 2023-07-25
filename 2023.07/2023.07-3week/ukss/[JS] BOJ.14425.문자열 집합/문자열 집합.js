const [first, ...list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N] = first.split(' ').map(Number);

const candidate = list.splice(0, N);
const set = new Set(candidate);

let ans = 0;

list.forEach((el) => {
    if (set.has(el)) {
        ans++;
    }
});

console.log(ans);
