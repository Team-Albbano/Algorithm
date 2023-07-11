const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(n, input) {
    const num = +n;
    const list = input.toString().trim().split(' ').map(Number);
    const obj = {};
    const stack = [];
    const ans = [];

    for (let i = 1; i <= num; i++) {
        obj[i] = list[i - 1];
        stack.push(i);
    }

    while (stack.length) {
        let key = 0;
        let move = 0;
        let temp = 0;

        key = stack.shift();
        key && ans.push(key);

        move = obj[key];
        move > 0 && move--;

        if (move > 0) {
            for (let i = 0; i < move; i++) {
                temp = stack.shift();
                stack.push(temp);
            }
        } else if (move < 0) {
            for (let i = 0; i < Math.abs(move); i++) {
                temp = stack.pop();
                stack.unshift(temp);
            }
        }
    }

    return ans;
}

const answer = solution(N, input);
console.log(...answer);
