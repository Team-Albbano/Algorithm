const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

function solution(input) {
    const stack = [];
    let ans = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '[') {
            stack.push(input[i]);
        } else if (input[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
            stack.push(2);
        } else if (input[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
            stack.push(3);
        } else if (input[i] === ')' && typeof stack[stack.length - 1] === 'number' && stack[stack.length - 2] === '(') {
            const num = stack.pop();
            stack.pop();
            stack.push(num * 2);
        } else if (input[i] === ']' && typeof stack[stack.length - 1] === 'number' && stack[stack.length - 2] === '[') {
            const num = stack.pop();
            stack.pop();
            stack.push(num * 3);
        } else {
            return 0;
        }

        if (typeof stack[stack.length - 1] === 'number' && typeof stack[stack.length - 2] === 'number') {
            const first = stack.pop();
            const second = stack.pop();
            stack.push(first + second);
        }
    }

    if (stack.length === 1 && typeof stack[0] === 'number') {
        ans = stack.pop();
    }

    return ans;
}

const answer = solution(input);
console.log(answer);
