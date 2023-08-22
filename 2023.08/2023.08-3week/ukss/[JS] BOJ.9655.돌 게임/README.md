<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 9655/돌 게임

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/9655)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

입력값이 1일 경우 SK가 무조건 이기기에 1일 경우 SK
입력값이 2일 경우 SK가 하나를 가져갈 수 있고 그 다음 CY가 하나를 가져갈 수 있기에 CY
입력값이 3일 경우 SK가 3개를 가져갈 수 있어서 SK, 1씩 가져가도 SK이다.
입력값이 4일 경우 SK가 한개 혹은 세개를 가져갈 수 있는데 두 경우 모두 CY가 마지막을 가져가기에 CY이다.

즉 홀수일 경우에는 SK, 짝수일 경우에는 CY라는 점화식을 만들 수 있다.

```javascript
const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
    if (input % 2 === 0) {
        return 'CY';
    } else {
        return 'SK';
    }
}

const ans = solution(input);
console.log(ans);
```

## 소요시간

## 어려웠던 점

## 배운 점

## 궁금한 점
