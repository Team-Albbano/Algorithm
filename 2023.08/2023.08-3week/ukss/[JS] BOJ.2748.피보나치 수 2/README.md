<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2748/피보나치 수 2

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2748)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

10870. 피보나치 수 5 문제랑 동일하게 접근했지만 틀렸습니다 라는 결과가 나왔다.

이는 n이 90일 경우 결과값이 2880067194370816120이 나오는데 JS에 존재하는 한계점으로 인해 정학한 수를 표시할 수 없었다.

그래서 이를 BigInt를 사용해서 피보나치 수를 계산한 후 이를 진수로 표현해주는 toString 메서드를 사용해서 결과값을 출력했다.

```javascript
const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
    }

    return dp[n].toString();
}

const ans = solution(input);
console.log(ans);
```

## 소요시간

## 어려웠던 점

## 배운 점

DP !

## 궁금한 점
