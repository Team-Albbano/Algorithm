<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [[JS] PRO 150368 이모티콘 할인행사

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/150368)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

풀이 설명란

```javascript
function solution(users, emoticons) {
  // 1) 최대 값 담을 변수 선언
  const answer = [0, 0];

  // 2) 할인율 변순 선언
  const discount = [10, 20, 30, 40];

  /* 
        3) 이모티콘마다 할인율을 적용 가능한 가짓수를 담는다. 
        ex) 이모티콘 2개 -> 4 * 4 = 16, 이모티콘 3개 -> 4 * 4 * 4 = 64 가짓수가 나온다.
    */
  const arr = [];

  // 4) 깊이 탐색을 통해 가능한 가짓수를 탐색한다. result : 이모티콘별 할인율 적용 값
  function dfs(emoticons, result) {
    // 5) 이모티콘이 없으면 탐색 종료
    if (emoticons.length < 1) {
      // 6) arr 배열에 탐색한 결괏값을 추가한다.
      arr.push(result);
      return;
    }

    // 7) 할인율 개수만큼 반복한다.
    for (let i = 0; i < discount.length; i++) {
      // 8) 이모티콘 개수를 하나씩 줄이고, 줄였던 이모티콘의 할인율과 원가를 result에 담는다.
      dfs(emoticons.slice(1), [...result, [discount[i], emoticons[0]]]);
    }
  }

  // 9) 최초 dfs 함수 실행
  dfs(emoticons, []);

  // 10) 할인가 계산 함수
  const disAmt = (dis, price) => ((100 - dis) / 100) * price;

  // 11) 모든 가짓수만큼 실행한다.
  arr.forEach((disArr) => {
    // 12) 가짓수마다 서비스 가입 수와 매출액을 구한다. [가입자 수, 총 매출액]
    const accrue = [0, 0];

    // 13) 사용자 수만큼 반복한다.
    users.forEach(([per, price]) => {
      // 14) 매출액 변수 선언
      let sum = 0;

      // 15) 가짓수에 담긴 이모티콘의 개수만큼 실행한다.
      disArr.forEach(([dis, cost]) => {
        // 16) 사용자의 할인가 이상만 매출액을 구한다.
        if (dis >= per) {
          // 17) 총 매출액을 구한다.
          sum += disAmt(dis, cost);
        }
      });

      // 18) 사용자의 마지노선 가격보다 매출액이 높으면, 그냥 서비스를 가입한다.
      if (sum >= price) {
        // 19) 서비스 증가
        accrue[0] += 1;
      } else {
        // 20) 높지 않다면 매출액을 증가시킨다.
        accrue[1] += sum;
      }
    });

    // 21) 최댓값을 비교한다. 우선순위 : 서비스 가입자 수 > 매출액
    if (answer[0] < accrue[0]) {
      // 22) 가입자 수가 더 많으면 accrue 값으로 최댓값 변경
      answer[0] = accrue[0];
      answer[1] = accrue[1];
    } else if (answer[0] === accrue[0]) {
      // 23) 동일할 경우
      if (answer[1] < accrue[1]) {
        // 24) 매출액으로 최댓값을 비교한다.
        answer[1] = accrue[1];
      }
    }
  });

  // 25) 최댓값을 return 한다.
  return answer;
}
```

## 소요시간

180 min

## 어려웠던 점

- DFS인 것은 아는데 어디에 어떻게 적용시킬지 고민이 되었다.

## 배운 점

- 조합으로도 풀 수 있는 문제
- 완전탐색이 가능했던 이유는 경우의 수가 2의 14승이기 때문에 1초를 넘기지 않아서

## 궁금한 점

🤍
