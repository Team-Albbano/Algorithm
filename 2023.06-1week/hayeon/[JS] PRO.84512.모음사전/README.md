<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 84512/모음사전

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/84512)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

1. dfs로 풀어야 하는 문제이다.
2. 주어진 영어 모음을 배열안에 넣는다.
3. 만약 dfs로 들어온 매개변수 length가 단어의 길이와 같다면 그 단어를 결과 배열에 넣는다.
4. 만약 아니라면 모음 배열을 돌면서 dfs(단어+모음, 길이, 결과배열)을 진행한다.
5. 5까지 반복문을 돌면서 dfs를 수행한다.
6. 결과 배열을 정렬하고 그 단어의 위치를 리턴한다.

```javascript
function solution(word) {
  const result = [];
  const str = "";

  const dfs = (word, length, result) => {
    const vowels = ["A", "E", "I", "O", "U"];

    if (length === word.length) {
      result.push(word);

      return;
    }

    vowels.forEach((vowel) => {
      dfs(word + vowel, length, result);
    });
  };

  for (let i = 1; i <= 5; i++) {
    dfs(str, i, result);
  }

  return result.sort().indexOf(word) + 1;
}
```

## 소요시간

혼자 풀지 못했고 풀이를 참고해도 이해하는데 좀 걸렸다.

## 어려웠던 점

dfs로 푸는 방식이 아직도 어색하다.
dfs가 여기저기 있어서 더 헷갈렸음

## 배운 점

dfs로 푸는 방식.....

## 궁금한 점

너무 어렵습니다.
