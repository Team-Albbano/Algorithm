<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1072/게임

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1072)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

이분 탐색으로 해결한 문제이다.

경기수가 증가하고, 무조건 이긴다는 가정하에 게임을 최소 몇판해야 승률이 변하는지 구하는 문제이다.

경기수로 범위를 만들고 (1 <= X <= 1,000,000,000) mid 값을 구해 이 mid 값을 승률 식에 넣어 승률이 변화할 경우 이를 정답에 담아주면 되는 것이다.

최소값을 구해야하기에 기존 승률이 변화할 경우 저장해둔 경기수랑 비교해서 더 작을 경우 해당 값으로 변경해주는 식으로 진행했다.

```javascript
const [X, Y] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const Z = ~~((100 * Y) / X);

let left = 1;
let right = 1000000000;
let match = Infinity;

while (left <= right) {
    let mid = ~~((left + right) / 2);
    let odds = ~~(100 * ((Y + mid) / (X + mid)));

    if (Z !== odds) {
        match = match > mid && mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(match === Infinity ? -1 : match);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

mid값과 odds값을 구하면서 값이 천정부지로 뛸수도 있겠다는 것을 알게 되었고, Infinity를 사용해서 큰 범위의 수도 넣을 수 있도록 만들수 있다는 것이 인상적이었다.

## 궁금한 점
