<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 10815/숫자 카드

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/10815)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

이분 탐색으로 해결한 문제이다.

우선 이분 탐색으로 검사해야 할 배열인 card 배열을 오름차순 정렬을 해준다음, 정수 M개가 담겨있는 배열을 for 문을 통해 하나씩 꺼내준다.

이후 이분 탐색을 통해 card 배열을 검사하여 있을 경우 isCheck 배열에 1을, 없을 경우 0을 담아준 후 검사가 끝난 후 isCheck 배열을 출력조건에 맞게 맞춰 출력해주었다.

```javascript
const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, card, M, check] = input.map((v) => v.split(' ').map(Number));
card.sort((a, b) => a - b);

let isCheck = [];

for (let x of check) {
    let start = 0;
    let end = card.length - 1;
    let cnt = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (x === card[mid]) {
            cnt = 1;
            break;
        } else if (x < card[mid]) {
            end = mid - 1;
        } else start = mid + 1;
    }

    isCheck.push(cnt);
}

console.log(isCheck.join(' '));
```

## 소요시간

5분 (숫자 카드2를 먼저 풀고 와서 굉장히 빠르게 풀었다)

## 어려웠던 점

## 배운 점

이분 탐색의 로직을 잘 이용하면 쉽게 풀 수 있었던 문제였다.

## 궁금한 점
