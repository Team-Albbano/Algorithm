<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 11652/카드

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/11652)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

카드의 개수가 가장 많은 카드를 뽑는 문제이다. 만약 여러 가지일 경우 작은 것을 출력하면 된다.

우선 문제의 조건이 -2^62 ~ 2^62 라는 범위를 가지고 있기에 BigInt 를 사용해서 입력값을 뽑아주었다.

sort() 함수를 통해 오름차순 정렬을 해주었는데, BigInt의 경우 숫자 뒤에 n이 붙어있어 기존의 `sort((a,b)=> a-b)` 방식은 작동하지 않았다.

다음 방식을 통해 이를 해결하였다.

[참고자료 Array.prototype.sort()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

```jsx
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

해당 compare 함수를 참고해 만든 sort() 이다. 이를 통해 BigInt 의 경우도 오름차순으로 정렬할 수 있었다.

```jsx
lists.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
```

forEach 를 통해서 입력값을 한바퀴 검사하였고, 연속으로 같은 수가 나올경우 cnt++, 그렇지 않을 경우 cnt = 0 으로 초기화 시켜주며 카드 장수를 계산하였다.

또한 여러 가지일 경우 작은 것을 출력하면 되는데, 어짜피 cnt 가 같을 경우에 maxNum 을 안바꿔주면 기존 maxNum 이 여러 가지 장수중 작은 값이기에 cnt > maxNum 으로 설정하여 이를 해결했다.

BigInt 로 값을 뽑아주었기에 String(maxNum) 으로 값을 문자열로 나타내어 숫자 모양으로 표시될 수 있도록 만들었다.

```javascript
const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((v) => BigInt(v));
const [, ...cards] = input;
cards.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
function solution(lists) {
    let cnt = 0;
    let maxCnt = 0;
    let maxNum = lists[0];
    lists.forEach((card, i) => {
        next = lists[i + 1];
        if (card === next) {
            cnt++;
        } else {
            cnt = 0;
        }
        if (cnt > maxCnt) {
            maxCnt = cnt;
            maxNum = card;
        }
    });
    return String(maxNum);
}
const answer = solution(cards);
console.log(answer);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

BigInt 의 경우 숫자에 n이 붙어나오기에 평소에 주로 쓰던 `sort((a,b)=> a-b)` 방식으로 오름차순 정렬을 할 수 없었다.

compare() 함수의 형식을 참고해 sort() 를 재해석하여 만들어 BigInt 도 오름차순으로 정렬할 수 있게 하는 스킬을 배웠다.

## 궁금한 점
