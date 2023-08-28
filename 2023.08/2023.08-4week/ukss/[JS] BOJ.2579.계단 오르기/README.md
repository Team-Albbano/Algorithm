<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2579/계단 오르기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2579)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

마지막 칸을 밟아야 한다, 그리고 한칸, 혹은 두칸씩 오를 수 있다는 조건을 통해 마지막 칸과 전칸을 밟는 경우, 혹은 마지막 칸과 전전칸을 밟는 경우로 나눠서 생각했다.

dp = dp (인덱스 1 부터 시작)
list = 입력 받은 계단의 점수 (인덱스 0 부터 시작)

1. 마지막 칸과 전칸을 밟는 경우

두칸 오르고 도착점에 도달하기 다음과 같은 식이 나온다.

dp[i] = dp[i - 2] + list[i - 1]

2. 마지막 칸과 전전칸을 밟는 경우

두칸 오르고 한칸 오르기에 다음과 같은 식이 나온다.

dp[i] = dp[i - 3] + dp[i - 1] + dp[i - 1]

총 점수의 최댓값을 구하는 문제임으로 두 경우 중 최댓값을 뽑아내면 된다.

```javascript
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
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

## 궁금한 점
