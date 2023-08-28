const [input, ...list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = list[0];
    dp[2] = Math.max(list[1], list[0] + list[1]);
    dp[3] = Math.max(list[0] + list[2], list[1] + list[2]);

    for (let i = 4; i <= n; i++) {
        dp[i] = Math.max(dp[i - 3] + list[i - 2] + list[i - 1], dp[i - 2] + list[i - 1]);
    }

    return dp[n];
}

const ans = solution(input);
console.log(ans);
