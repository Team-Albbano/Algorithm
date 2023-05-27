<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1475/방 번호

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1475)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

입력값을 쪼개서 배열로 받아서 해당 값을 비교하는 식으로 코드를 설계

6, 9 를 뒤집어서 이용할 수 있기에 서로 없을 때 6일 때는 9를, 9일 때는 6이 있는지 조회해서 이를 빼주면 되겠다고 생각

근데 만약 세트를 교체했는데 이전 세트에서 사용할 수 있는 숫자가 존재할 수도 있기에 left 배열에 나머지를 담아주는 식으로 설계

```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);

let plastic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp = [...plastic];
let left = [];
let cnt = 1;

for (let i = 0; i < input.length; i++) {
  if (plastic.indexOf(input[i]) === -1) {
    if (left.includes(input[i])) {
      if (input[i] === 6 && left.indexOf(9) !== -1) {
        left.splice(plastic.indexOf(9), 1);
      } else if (input[i] === 9 && left.indexOf(6) !== -1) {
        left.splice(plastic.indexOf(6), 1);
      } else {
        left.splice(left.indexOf(input[i]), 1);
      }
    } else {
      if (input[i] === 6 && plastic.indexOf(9) !== -1) {
        plastic.splice(plastic.indexOf(9), 1);
      } else if (input[i] === 9 && plastic.indexOf(6) !== -1) {
        plastic.splice(plastic.indexOf(6), 1);
      } else {
        plastic.forEach((el) => left.push(el));
        plastic = [...temp];
        plastic.splice(plastic.indexOf(input[i]), 1);
        cnt++;
      }
    }
  } else {
    plastic.splice(plastic.indexOf(input[i]), 1);
  }
}

console.log(cnt);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

반례가 상당히 많은 문제여서 이를 해결하는데 생각보다 많은 시간이 소요되었던 문제였다.

이러한 반례들을 처리하느라 비교적 복잡하게 코드를 짜게된 것 같아 이를 리팩토링해서 더 단순하게 짤 수 있을지 고민해봐야겠다.

## 궁금한 점
