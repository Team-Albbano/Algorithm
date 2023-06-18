<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1920/수 찾기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1920)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

처음에는 includes 를 사용해서 값이 있는지 조회했다.

```jsx
const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');
let [N, first] = input.splice(0, 2);
first = first.split(' ').map(Number);
let [M, second] = input;
second = second.split(' ').map(Number);
let ans = [];
for (let item of second) {
    if (first.includes(item)) ans.push(1);
    else ans.push(0);
}
console.log(ans.join('\n'));
```

결과는 "시간 초과" 가 나타났고, 이를 이분 탐색으로 해결해야 한다고 생각했다.

그래서 이분 탐색을 통해 다음과 같이 문제를 해결했다.

```javascript
const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');
const [N, A, M, B] = input.map((v) => v.split(' ').map(Number));
A.sort((a, b) => a - b);
const ans = [];
// 이분 탐색
B.forEach((el) => {
    let left = 0;
    let right = A.length;
    let mid = Math.floor((left + right) / 2);
    while (left <= right) {
        if (el === A[mid]) {
            ans.push(1);
            return;
        } else if (el > A[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        mid = Math.floor((left + right) / 2);
    }
    ans.push(0);
    return;
});
console.log(ans.join('\n'));
```

## 소요시간

3 시간

## 어려웠던 점

## 배운 점

시간 복잡도에 대해 고민, 이분 탐색이라는 방법을 공부

## 궁금한 점
