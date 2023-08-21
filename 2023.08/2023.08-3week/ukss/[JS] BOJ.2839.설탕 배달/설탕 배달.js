const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
    let cnt = 0;
    let total = n;

    while (true) {
        if (total % 5 === 0) {
            cnt += parseInt(total / 5);
            break;
        }

        if (total < 0) {
            cnt = -1;
            break;
        }

        total -= 3;
        cnt++;
    }

    return cnt;
}

const ans = solution(input);
console.log(ans);
