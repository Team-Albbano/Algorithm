const [N, exp, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(N, exp, input) {
    const expression = exp.split('');
    const list = input.map(Number);
    const stack = [];
    let ans = 0;

    const alp = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0,
        H: 0,
        I: 0,
        J: 0,
        K: 0,
        L: 0,
        M: 0,
        N: 0,
        O: 0,
        P: 0,
        Q: 0,
        R: 0,
        S: 0,
        T: 0,
        U: 0,
        V: 0,
        W: 0,
        X: 0,
        Y: 0,
        Z: 0,
    };

    for (let i = 0; i < expression.length; i++) {
        if (Object.keys(alp).includes(expression[i])) {
            if (alp[expression[i]] === 0) {
                const num = list.shift();
                alp[expression[i]] = num;
            }

            stack.push(alp[expression[i]]);
        } else {
            const second = stack.pop();
            const first = stack.pop();
            let value = 0;

            if (expression[i] === '+') {
                value = first + second;
            } else if (expression[i] === '-') {
                value = first - second;
            } else if (expression[i] === '*') {
                value = first * second;
            } else if (expression[i] === '/') {
                value = first / second;
            }

            stack.push(value);
        }
    }

    ans = stack.shift().toFixed(2);
    return ans;
}

const answer = solution(N, exp, input);
console.log(answer);
