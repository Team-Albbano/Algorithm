const [M, N] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const arr = Array(N + 1)
    .fill(true)
    .fill(false, 0, 2);
const res = [];

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
    let j = 2;

    while (i * j <= N) {
        arr[i * j] = false;
        j++;
    }
}

for (let i = M; i <= N; i++) {
    if (arr[i]) {
        res.push(i);
    }
}

console.log(res.join('\n'));
