const [_, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[n];
}

const ans = [];
input.forEach((v) => {
    return ans.push(solution(v));
});
console.log(ans.join('\n'));
