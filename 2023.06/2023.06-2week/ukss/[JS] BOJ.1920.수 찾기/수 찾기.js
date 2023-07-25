const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');
const [N, A, M, B] = input.map((v) => v.split(' ').map(Number));
A.sort((a, b) => a - b);
const ans = [];
// 이분 탐색
B.forEach((el) => {
    let left = 0;
    let right = A.length;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (el === A[mid]) {
            ans.push(1);
            return;
        } else if (el > A[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    ans.push(0);
    return;
});
console.log(ans.join('\n'));
