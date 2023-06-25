<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120902/문자열 계산하기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120902)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

(1) const splited = my_string.split(" "); 를 한 이유는 for문을 돌려서 각각 배열들을 더해주기 위함입니다.

(2) let ans = Number(splited[0]); 첫번째 index 값을 넣어줍니다

(3) forEach 문을 돌려 my_string 을 index 순차적으로 더해줍니다.

(4) + , - 가 나올 경우 index 다음 숫자를 가져온 후 연산자에 맞게 계산해줍니다.

```js
function solution(my_string) {
  const splited = my_string.split(" ");

  let ans = Number(splited[0]);

  splited.forEach((item, index) => {
    if (item === "+") {
      ans += Number(splited[index + 1]);
    }

    if (item === "-") {
      ans -= Number(splited[index + 1]);
    }
  });

  return ans;
}
```

## 소요시간

50분

## 어려웠던 점

forEach 를 자주 사용하지 않아서 개념이 조금 생각이 안났다

## 배운 점

forEach 개념

## 궁금한 점
