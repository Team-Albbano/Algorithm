<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1436/영화감독 숌

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1436)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

우선 빠른 시작을 위해 titleNum 이라는 변수에 665 를 넣어 시작하였다.

`while`문을 사용하여 이를 해결했는데, input이 0보다 클 경우 반복되도록 설계했다.

반복될때 마다 titleNum 값을 1씩 증가시켰고, 만약 titleNum에 666이 포함되어 있을 경우 input 값을 1씩 감소시켰고, input이 0이 될때 `while`문이 종료되며, 이때 titleNum의 값이 제목에 들어간 수임으로 이를 출력해주었다.

```javascript
let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let titleNum = 665;

while (input > 0) {
  titleNum++;
  if (titleNum.toString().includes('666')) {
    input--;
  }
}

console.log(titleNum);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

## 궁금한 점
