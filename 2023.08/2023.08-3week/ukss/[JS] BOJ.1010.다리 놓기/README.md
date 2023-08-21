<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1010/다리 놓기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1010)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

시간 제한이 0.5초 밖에 없는 문제라 DP를 활용해서 문제를 풀어보아야 겠다고 접근했다.

서쪽의 사이트가 1개이고 동쪽의 사이트가 n개일 경우에는 방법이 n개 이다. 그러고 서쪽의 사이트가 2개가 되면 동쪽의 사이트가 n개일 경우 서쪽의 사이트가 1개이고 동쪽의 사이트가 1개일때부터 n-1개까지의 방법을 다 더한 수만큼 방법의 수가 된다.

그래서 다음과 같은 식을 유도할 수 있었다.

dp[w][e] = dp[w-1][1] + dp[w-1][2] + dp[w-1][3] + ... + dp[w-1][e-1]

```javascript
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
```

## 소요시간

## 어려웠던 점

## 배운 점

DP !

## 궁금한 점
