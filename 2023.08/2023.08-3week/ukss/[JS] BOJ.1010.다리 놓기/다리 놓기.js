const [_, ...input] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

function solution(list) {
    const arr = [];

    list.map((el) => {
        const west = el[0];
        const east = el[1];
        const dp = Array.from(Array(west + 1), () => Array(east + 1).fill(0));

        for (let i = 1; i <= west; i++) {
            for (let j = i; j <= east; j++) {
                if (i === j) {
                    dp[i][j] = 1;
                } else if (i === 1) {
                    dp[i][j] = j;
                } else {
                    let temp = 0;
                    for (let k = 1; k < j; k++) {
                        temp += dp[i - 1][k];
                    }
                    dp[i][j] = temp;
                }
            }
        }

        arr.push(dp[west][east]);
    });

    return arr.join('\n');
}

const ans = solution(input);
console.log(ans);
