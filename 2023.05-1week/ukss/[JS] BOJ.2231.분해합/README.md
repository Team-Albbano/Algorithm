<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2231/분해합

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2231)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

입력값과 생성자를 담을 constructor 배열을 만들어 문제를 진행했다.

`brute()` 함수를 생성해 해당 함수에서 입력된 값을 분해합 값으로 출력해줄 수 있도록 만들었으며, 1 부터 입력값까지 반복문을 통해 탐색하면서 생성자를 찾을 수 있도록 설계했다. (브루트포스 알고리즘)

입력값과 함수를 통해 출력된 값이 같을 경우 해당 값을 constructor 배열에 담을 수 있게 설계했고, constructor 배열의 길이가 0 이상일 경우 생성자가 있다는 의미이기에 그럴 경우에 가장 작은 생성자를 출력할 수 있도록 `Math.min()`를 사용했다.

```javascript
let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const constructor = [];

function brute(n) {
  const N = n.toString().split('').map(Number);
  return n + N.reduce((acc, cur) => acc + cur, 0);
}

for (let i = 1; i <= input; i++) {
  if (brute(i) === input) {
    constructor.push(i);
  }
}

console.log(constructor.length ? Math.min(...constructor) : 0);
```

## 소요시간

30분

## 어려웠던 점

생성자를 구하는 것이 아닌 분해합을 구하는 것으로 헷갈려 계속 문제를 잘못 풀어 시간이 꽤 걸렸다.
[셀프넘버](https://www.acmicpc.net/problem/4673) 문제랑 비슷하면서 살짝 다른 그런 느낌이었다.

## 배운 점

브루트포스 알고리즘을 처음 공부하고 시작한 문제였다. 특정 구조를 전체적으로 탐색할 수 있는 방법에 대해 모색해 보느라 시간이 걸렸던 것 같다. 관련해서 좀 더 많은 문제를 풀어보고 익숙해질 수 있도록 노력할 것이다.

## 궁금한 점
