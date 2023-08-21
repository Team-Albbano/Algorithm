const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
    if (input % 2 === 0) {
        return 'CY';
    } else {
        return 'SK';
    }
}

const ans = solution(input);
console.log(ans);
