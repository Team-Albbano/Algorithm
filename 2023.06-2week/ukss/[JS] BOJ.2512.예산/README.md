<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2512/예산

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2512)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

이분 탐색을 사용해서 해결한 문제이다.

예산요청 값이 상한값보다 클 경우 예산요청 값을 상한값으로 변경해주고 그렇지 않으면 기존 값을 유지하도록 만들었다.

이러한 상한값은 이분탐색을 통해 찾으면서 이러한 요청값들을 합해 총 예산 M 보다 작은 값들을 뽑아주며, 이러한 값들 중 최댓값을 뽑도록 설계했다.

```javascript
const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const area = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
const M = +input[2];

let low = 0;
let high = area[area.length - 1];
let cnt = 0;

while (low <= high) {
    let mid = ~~((low + high) / 2);
    let data = area.map((el) => {
        if (el > mid) {
            return (el = mid);
        } else return el;
    });

    let tot = data.reduce((arr, cur) => (arr += cur), 0);

    if (tot <= M) {
        cnt = mid;
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

console.log(cnt);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

사실 빨리 풀었지만, 검색해야할 범위를 오름차순 정렬을 진행하고 해야하는데 이를 깜빡하여 오래 걸린 문제였다.

이분탐색을 할때는 반드시 검색할 대상을 오름차순 정렬하는 것을 깜빡하지 말자!!!

## 궁금한 점
