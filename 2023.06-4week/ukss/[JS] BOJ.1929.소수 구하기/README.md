<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1929/소수 구하기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1929)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

에라토스테네스 체 알고리즘을 활용하여 M 이상 N 이하의 소수를 모두 출력하는 프로그램을 제작하였다.

```javascript
const [M, N] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const arr = Array(N + 1)
    .fill(true)
    .fill(false, 0, 2);
const res = [];

for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
    let j = 2;

    while (i * j <= N) {
        arr[i * j] = false;
        j++;
    }
}

for (let i = M; i <= N; i++) {
    if (arr[i]) {
        res.push(i);
    }
}

console.log(res.join('\n'));
```

## 소요시간

30 분

## 어려웠던 점

## 배운 점

에라토스테네스 체 알고리즘을 학습

## 궁금한 점
