<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1654/랜선 자르기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1654)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

이분 탐색으로 해결한 문제이다.

우선 이분 탐색을 위해 lanLine 배열을 오름차순 정렬을 해준 후, mid 값을 구해 mid 값 보다 큰 lanLine 들을 mid 로 나눠 몫(랜선의 개수)를 구해준다. 이를 합한 cnt 을 만들어 해당 값이 필요한 랜선의 개수 N과 동일하거나 이보다 클 경우 ans에 mid 값을 넣어주고, 계속해서 이분 탐색을 진행했다. 이러한 조건을 만족한 랜선의 최대 길이, 즉 ans(또는 mid 값으로 볼 수 있음)의 최댓값을 구해주어야 하기에 while 문 반복중에 계속 값을 덮어 씌우는 식으로 진행했다.

이후 이분 탐색이 완료되면 N개를 만들 수 있는 랜선의 최대 길이를 출력한다.

```javascript
const [KN, ...lan] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [K, N] = KN.split(' ').map(Number);
const lanLine = lan.map(Number).sort((a, b) => a - b);

let start = 0;
let end = lanLine[lanLine.length - 1];
let ans = 0;

while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let cnt = 0;

    for (let x of lanLine) {
        if (x >= mid) {
            cnt += Math.floor(x / mid);
        }
    }

    if (cnt >= N) {
        ans = mid;
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(ans);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

이분 탐색의 로직을 잘 이용하면 쉽게 풀 수 있었던 문제였다.

## 궁금한 점
