<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2501/약수 구하기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2501)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

N의 약수를 담을 배열을 생성해 이를 담아내는 방식으로 구현했다.

만일 p를 q로 나눴을 때 나머지가 0일 경우 q는 p의 약수이므로 나머지가 0일때 이를 배열에 담도록 설계했다. 반복문이 종료된 후 이를 오름차순으로 표현하기 위해 sort()를 사용했다.

N의 약수들 중 K번째로 작은 수를 출력하기 위해 오름차순으로 정렬한 배열에서 K-1 번째 값을 뽑아내 출력하였다. 만일 K번째 약수가 존재하지 않을 경우에는 0을 출력하기 위해 이를 삼항연산자로 표현했다.

```javascript
const [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let yaksu = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    yaksu.push(Math.floor(N / i));
  }
}

yaksu.sort((a, b) => {
  return a - b;
});

console.log(yaksu[K - 1] ? yaksu[K - 1] : 0);
```

## 소요시간

10분

## 어려웠던 점

## 배운 점

## 궁금한 점
