<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2110/공유기 설치

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2110)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

이분 탐색으로 해결한 문제이다.

주어진 집의 좌표를 오름차순으로 정렬한 후, 이진 탐색을 사용하여 공유기를 설치할 위치를 결정하여 이진 탐색이 끝난 후, 설치한 공유기 사이의 최대 거리를 출력하는 문제였다.

```javascript
const [NC, ...coordinate] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, C] = NC.split(' ').map(Number);
const xList = coordinate.map(Number).sort((a, b) => a - b);

let low = 1;
let high = xList[xList.length - 1];

while (low <= high) {
    let mid = ~~((low + high) / 2);

    if (routerSet(mid)) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

function routerSet(distance) {
    let cnt = C - 1;
    let prevSet = xList[0];

    for (let i = 1; i < xList.length; i++) {
        if (xList[i] - prevSet >= distance) {
            prevSet = xList[i];
            cnt--;
        }
    }

    if (cnt <= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(high);
```

## 소요시간

3시간

## 어려웠던 점

## 배운 점

이분 탐색을 어떻게 활용할지 엄청 고민했던 문제였다.

## 궁금한 점
