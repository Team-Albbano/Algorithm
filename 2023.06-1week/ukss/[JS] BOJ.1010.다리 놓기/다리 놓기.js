const [T, ...testCase] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(list) {
    const arr = [];
    for (const item of list) {
        const [N, M] = item.split(' ').map(Number);
        const dp = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
        for (let i = 1; i <= N; i++) {
            for (let j = 1; j <= M; j++) {
                if (i === 1) {
                    // [1][j]
                    dp[i][j] = j; // 1,2,3,4,5....
                } else {
                    // [i][j]
                    if (i === j) {
                        dp[i][j] = 1;
                    } else if (i < j) {
                        for (let k = 1; k < j; k++) {
                            dp[i][j] += dp[i - 1][k];
                        }
                    }
                }
            }
        }
        arr.push(dp[N][M]);
    }
    return arr.join('\n');
}

const answer = solution(testCase);
console.log(answer);
