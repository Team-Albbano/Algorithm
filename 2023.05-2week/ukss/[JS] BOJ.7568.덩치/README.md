<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 7568/덩치

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/7568)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

덩치 비교를 확실하게 하기 위해서는 키와 몸무게 둘다 작을 경우 낮은 순위를 부여하면 된다.

이를 위해 2차원 배열로 이들의 키와 몸무게 값을 사용할 수 있도록 제작했으며, 완전 탐색을 사용하여 전체 학생들의 키와 몸무게를 비교하였다. 키와 몸무게가 둘다 비교 대상보다 작을 경우 등수를 1 증가하여 이를 순위 배열에 담아두었다.

이를 `join(" ")`을 사용해서 공백문자로 분리하여 출력할 수 있도록 만들었다.

```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
const size = input
  .slice(1, input.length)
  .toString()
  .split(',')
  .map((el) => el.split(' ').map(Number));
const rank = [];
for (let i = 0; i < N; i++) {
  let cnt = 1;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (size[i][0] < size[j][0] && size[i][1] < size[j][1]) {
        cnt++;
      }
    }
  }
  rank.push(cnt);
}
console.log(rank.join(' '));
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

## 궁금한 점
