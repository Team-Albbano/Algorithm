<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 132265/롤케이크 자르기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/132265)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

1. 형이랑 동생 객체를 만든다.
2. 형이랑 동생 롤케이크 토핑 개수를 셀 변수를 만든다.
3. 동생 개수에 Set을 이용해서 중복되지 않은 토핑 개수를 넣어준다.
4. 토핑 배열을 돌면서 동생 객체에 숫자를 하나씩 넣어줌 (토핑 개수)
5. 토핑 배열에서 형객체에 cur값이 없으면 형객체에 1을 넣고 카운팅해줌
6. 그리고 동생객체 안에 있는 cur값 1감소
7. 이걸 반복하다가 동생 객체 cur값이 모두 소진되면 동생 카운팅 감소
8. 그리고 형 카운팅 수랑 동생 카운팅 수 같아지면 결과값 증가후 반환하기

```javascript
function solution(topping) {
  const olderObj = {};
  const youngerObj = {};
  let olderCount = 0;
  let youngerCount = new Set(topping).size;

  topping.forEach((el) => {
    youngerObj[el] = (youngerObj[el] || 0) + 1;
  });

  return topping.reduce((acc, cur) => {
    if (!olderObj[cur]) {
      olderObj[cur] = 1;
      olderCount++;
    }

    youngerObj[cur]--;

    if (!youngerObj[cur]) youngerCount--;
    if (olderCount === youngerCount) acc++;

    return acc;
  }, 0);
}
```

## 소요시간

일단 이 문제 이해못했음.

## 어려웠던 점

저 증감연산자 때문에 뭔가 헷갈려서 아직 이해를 잘 못했어요

## 배운 점

원래는 배열에 10001 넣고 하나하나 만들어줬는데 굳이 안만들고 객체에다 갯수 집어넣어서 풀면 된다. 객체로 사용할까 생각했는데 객체로 푸는법을 잘 몰라서 도전을 못함..
이 문제 이분탐색으로도 풀 수 있어서 한 번 해볼랍니다.

## 궁금한 점
