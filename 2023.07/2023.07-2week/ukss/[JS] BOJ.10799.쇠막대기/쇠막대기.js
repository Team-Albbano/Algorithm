const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

function solution(input) {
    const stack = [];
    let num = 0;

    for (let i = 0; i < input.length; i++) {
        let str = input[i];

        if (str === '(' && input[i + 1] === ')') {
            num += stack.length;
            i++;
        } else if (str === '(') {
            stack.push('(');
        } else {
            stack.pop();
            num++;
        }
    }

    return num;
}

const answer = solution(input);
console.log(answer);
