const [N, A, B] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

function solution(n, alist, blist) {
    const N = +n;
    const A = alist
        .split(' ')
        .map(Number)
        .sort((a, b) => a - b);
    const B = blist
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a);

    let tot = 0;

    for (let i = 0; i < N; i++) {
        tot += A[i] * B[i];
    }

    return tot;
}

const answer = solution(N, A, B);
console.log(answer);
