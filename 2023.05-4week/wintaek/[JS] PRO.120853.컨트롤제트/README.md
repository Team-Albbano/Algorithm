<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120853/컨트롤제트

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120853)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

풀이 설명란
스택 구조를 이용해서 문제 풀이

(1) split 을 이용하여 문자열을 배열로 변환

(2) 빈 배열을 하나 만들어서 한개씩 S를 넣어줌

(3) for문을 이용하여 하나씩 비교해주면서 넣는데, 이 때 input에 Z가 들어가면 뺴주는 형식

```javascript
function solution(s) {
  const input = s.split(" ");

  let stack = [];

  for (let index = 0; index < input.length; index++) {
    if (input[index] === "Z") {
      stack.pop();

      continue;
    }

    stack.push(input[index]);
  }

  const sum = stack.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);

  return sum;
}
```

## 소요시간

40분

## 어려웠던 점

Z 가 나올 떄 그 뒤에 나올 숫자들을 빼줘야 하는데 그걸 Stack 구조로 해야한다는걸 생각지도 못했습니다. 아마 처음으로 Stack 구조에 대한 간단한 방식으로 문제를 풀어본 것 같습니다.

## 배운 점

Stack 구조에 기본

## 궁금한 점

제가 맞게 풀이를 작성하였나요 ?
