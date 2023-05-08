<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 9506/약수들의 합

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/9506)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

입력에서 `2 < n < 100000` 조건이 있어 `filter()`를 사용하여 2보다 큰 수만 배열에 담을 수 있도록 초기에 정렬을 했다.

해당 배열에서 테스트케이스를 한줄씩 뽑아내기 위해 반복문을 사용했으며, 단계별로 약수를 담을 배열을 만들어 주었고, 테스트케이스보다 작은 약수를 구하기 위해 반복문을 이용해 약수를 배열에 담아내는 식으로 구현했다.

그리고 완전수인지 판단하기 위해 `reduce()`를 사용해 약수들의 합을 구했고 이를 테스트케이스 값과 비교를 하는 삼항연산자를 만들었다. 만족할 경우와 그렇지 않을 경우에 맞게 출력문을 달리하였다.

```javascript
const list = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .filter((el) => el > 2);

for (let i = 0; i < list.length; i++) {
  let yaksu = [];
  let input = list[i];

  for (let j = 1; j < input; j++) {
    if (input % j === 0) {
      yaksu.push(j);
    }
  }

  let result = yaksu.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);

  input === result ? console.log(input + ' = ' + yaksu.join(' + ')) : console.log(input + ' is NOT perfect.');
}
```

## 소요시간

30분

## 어려웠던 점

## 배운 점

문제를 다 풀고 정리를 하는 중에 `입력의 마지막엔 -1이 주어진다` 라는 문장을 지금 보았다.

이걸 일찍 보았다면 그냥 해당 배열에서 마지막꺼만 검사를 안해도 되게 설계를 할 수 있었다.

_오늘도 문제를 꼼꼼히 봐야겠다는 생각을 하였다._

## 궁금한 점
