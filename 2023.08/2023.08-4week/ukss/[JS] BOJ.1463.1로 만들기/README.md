<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1463/1로 만들기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1463)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

-   시간 제한(0.15초)를 보고 규칙을 보고 dp를 사용해야겠다고 생각
-   우선 1을 빼는건 조건에 걸리지 않는 경우니까 처음에 입력값에 1을 빼고 연산을 시작, 연산을 했으니 dp 값에다 1을 더해준다.
-   2로 나눠질 경우, 3으로 나눠질 경우 조건을 만들어서 dp값에서 현재 dp[i]값 과 2 혹은 3으로 나눈 몫인 dp[i / 2] + 1 혹은 dp[i / 3] + 1 중 최소값을 dp[i]값에 넣어서 dp 배열을 완성시킨다. 최소값인 이유는 연산을 사용하는 횟수의 최솟값을 출력하기 위함
-   예시
    input : 2
    dp[2] = dp[1] + 1 = 1
    input : 10
    dp[10] = dp[9] + 1; = dp[2] + 2; = 3
    dp[10] = Math.min(dp[10], dp[5] + 1) (dp[5] = dp[4] + 1 = dp[2] + 2 = 3)
    = 3

```javascript
const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
    const dp = new Array(n + 1).fill(0);

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + 1;

        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }

        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
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
