<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] PRO 120891/369게임

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/120891)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

풀이 설명란

(1) order 중에서 3 과 6 과 9 가 들어가는 것을 발견해야 하기 때문에 String 으로 변환하였습니다.

(2) for문을 돌려 stringOrder[i] 번째에서 부터 하나씩 비교를 해줍니다.

(3) 3,6,9 이면 1을 카운트 해줍니다.

```javascript
function solution(order) {
  let answer = 0;
  const stringOrder = String(order);
  for (let i = 0; i < stringOrder.length; i++) {
    const item = stringOrder[i];
    if (item === "3" || item === "6" || item === "9") {
      answer += 1;
      // answer++; 후감자 사용해서도 가능하다
    }
  }
  return answer;
}
```

## 소요시간

30분

## 어려웠던 점

## 배운 점

for문을 돌리면서 index[i] 번째와 비교해가며 찾는 것.

## 궁금한 점

맞게 풀이를 작성하였나요 ?
