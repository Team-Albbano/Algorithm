<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 10773/제로

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/10773)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

스택을 활용하여 푼 문제이다.

스택을 구현할 arr 배열을 만든 후 K개의 줄이 담긴 money 배열을 forEach 를 통해 하나씩 뽑아내 값이 0인지 아닌지를 조회한다.

0일 경우 arr 배열에 마지막으로 담긴 값을 pop 으로 뽑아내고, 아니면 이를 arr 배열에 뒷부분에 push 를 사용해서 넣어준다.

그래서 조회를 마치면 arr 배열의 총합을 reduce 를 통해 구해 이를 출력해주었다.

```javascript
const [K, ...money] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let arr = [];
money.forEach((el) => {
    if (el === 0) {
        arr.pop();
    } else {
        arr.push(el);
    }
});
console.log(arr.reduce((acc, cur) => (acc += cur), 0));
```

## 소요시간

20분

## 어려웠던 점

## 배운 점

## 궁금한 점
