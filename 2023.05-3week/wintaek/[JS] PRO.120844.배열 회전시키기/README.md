<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120844/배열 회전시키기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120844)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

- (1) right 과 left 일때 값을 뱉어내야 하기 때문에 if 문을 사용하였습니다
- (2) right 일 때 오른쪽으로 한 칸 밀어내고 맨 왼쪽으로 회전시켜야 하니 pop 을 이용하여 제거시킨다음 반환된 값을 unshift를 통해 다시 반환시킵니다
- (3) left 일 떄 왼쪽으로 회전시켜야 하니 shift 를 이용하여 맨 앞 배열 요소를 제거시키고 반환된 값을 push 를 통해 다시 반환시킵니다.

```javascript
function solution(numbers, direction) {
  if ("right" === direction) {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}
```

## 다른 문제 풀이

- 삼항식으로 문제풀이를 보았는데 역시 if 문을 삼항식으로 줄여쓰니 조금 더 간결하게 코드가 짜여진다. 하지만 아직까지 머리로는 생각이 잘 나지 않는다

```js
function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}
```

## 소요시간

## 어려웠던 점

## 배운 점

## 궁금한 점
