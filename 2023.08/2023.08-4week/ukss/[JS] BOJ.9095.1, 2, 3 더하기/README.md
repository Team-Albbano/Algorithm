<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 9095/1, 2, 3 더하기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](#)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

dp를 사용해 해결한 문제. 규칙을 찾으려 접근

e.g.
input 1 => 1
input 2 => 1+1, 2 => 2
input 3 => 1+1+1, 1+2, 2+1, 3 => 4
input 4 = > 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 1+3, 3+1, 2+2 => 7

위의 예시에서 다음과 같은 규칙을 찾을 수 있었다.

dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]

```javascript
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
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

## 궁금한 점
