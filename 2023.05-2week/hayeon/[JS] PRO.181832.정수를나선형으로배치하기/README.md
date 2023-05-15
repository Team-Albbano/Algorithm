<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 181832/정수를 나선형으로 배치하기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/181832)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

일단 반복문을 돌려서 배열에 [0, 0, 0, 0] 베열을 n개 만큼 넣어주고
while문을 돌려서 조건에 맞게 계속 반복해주면 된다.
먼저 answer[y][x]에 1을 담아놓은 후 2부터 시작하는데,
차례대로 배열에 넣다가 두번째줄부터 맨 마지막 요소에 이어지는 숫자를 담으면 된다.

```javascript
function solution(n) {
  const answer = [];
  // 0 배열 생성
  for (let i = 0; i < n; i++) {
    answer.push(new Array(n).fill(0));
  }

  let num = 2;
  let x = 0;
  let y = 0;
  answer[y][x] = 1;

  while (num <= n ** 2) {
    while (x < n - 1 && answer[y][x + 1] === 0) {
      x++;
      answer[y][x] = num;
      num++;
    }

    while (y < n - 1 && answer[y + 1][x] === 0) {
      y++;
      answer[y][x] = num;
      num++;
    }

    while (x > 0 && answer[y][x - 1] === 0) {
      x--;
      answer[y][x] = num;
      num++;
    }

    while (y > 0 && answer[y - 1][x] === 0) {
      y--;
      answer[y][x] = num;
      num++;
    }
  }
  return answer;
}
```

## 소요시간

어려워서 오래걸림..풀었다 말았다 해서..

## 어려웠던 점

문제는 이해했는데 코드를 어떻게 짜야할지 감이 안잡혔다.

## 배운 점

while문 안에 while문을 써도 되는구나..

## 궁금한 점

더 좋은 방법 있을까유 이 문제 다시 이해해야될 것 같음.
