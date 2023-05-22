<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120846/합성수 찾기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120846)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

**이해를 잘 하고 넘어가지 못하여 질문 드립니다.**
합성수는 2개 이상의 약수를 가지고 있다
(1) 합성수를 찾는 과정에서 왜 i - 1 을 해야하는지 모르겠다. i가 10이라고 가정을 한다면 i가 9부터 시작을 하는건데 10이 들어가지를 않는다.

```javascript
for (let num = 2; num < i - 1; num++)
```

```javascript
function solution(n) {
  let answer = 0;
  for (let i = n; i >= 1; i--) {
    // i가 합성수인지 비교해야하는 숫자
    let isCount = false;
    for (let num = 2; num < i - 1; num++) {
      if (i % num === 0) {
        // 합성수
        isCount = true;
      }
    }
    // isCount => 합성수 여부 확인
    if (isCount) {
      answer += 1;
    }
  }
  return answer;
}
```

## 소요시간

- 1시간

## 어려웠던 점

합성수를 찾는다는점 (for문을 돌려)

## 배운 점

## 궁금한 점

문제풀이의 궁금한점을 적어놨습니다.
