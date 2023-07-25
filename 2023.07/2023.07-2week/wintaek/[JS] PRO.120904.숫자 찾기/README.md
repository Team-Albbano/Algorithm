<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120904/숫자찾기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120904)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

(1) 숫자열인 num 을 문자열로 반환하기 위해서 toString() 을 사용해준다.

(2) arr.includes(item, from) 를 이용하여 k 가 나오면 if문이 실행되게 적어줍니다.

(3) k가 나오면 true 로 반환이 되니 조건문 안에는 arr.indexOf(item, from) 를 활용하여 해당 요소의 인덱스를 반환해줍니다. k가 나온 숫자를 return 해주어야 하니 +1 을 더해줍니다. (인덱스 요소를 반환하여서 +1 을 하였습니다 )

(4) 문제 요건중에 k가 말하는 숫자가 없다면 -1 을 return 을 해주어야 하니 else 문에 return -1 을 해줍니다.

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

**혼자생각한 시간** : 20분
**풀이 및 이해시간** : 40분

## 어려웠던 점

1. num 안에 k 숫자의 위치를 알아야 된다는 점이 조금 어려웠다.

2. 풀이때 toString() 개념을 잘 알지 못하여 찾는 시간이 조금 걸렸다.

## 배운 점

1. toString() 개념을 집고 넘어가서 좋았다.

2. include 다시 한번 알고 가서 좋았다.

## 궁금한 점
