<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO.120842.2차원으로 만들기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120842)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

풀이 설명란

(1) for문을 돌려 length 에 n을 나눠줌으로써 반복하게 해주고
(2) slice 를 통해서 배열을 잘라준다
(3) i가 0, n이 2부터 시작이 된다면, (0,2) => [1,2] 까지 slice 가 return 된다

```javascript
function solution(num_list, n) {
  let result = [];

  for (let i = 0; i < num_list.length / n; i++) {
    result.push(num_list.slice(i * n, i * n + n));
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
```

## 소요시간

50분

## 어려웠던 점

문제는 이해가 되었는데 참.. 이렇게 공식으로 풀어서 쓰는게 어떻게 생각에서 나오는지 궁금합니다..

## 배운 점

## 궁금한 점
