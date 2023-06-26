<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2960/에라토스테네스의 체

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2960)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

이 알고리즘은 다음과 같다.

1. 2부터 N까지 모든 정수를 적는다.
2. 아직 지우지 않은 수 중 가장 작은 수를 찾는다. 이것을 P라고 하고, 이 수는 소수이다.
3. P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
4. 아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.
5. N, K가 주어졌을 때, K번째 지우는 수를 구하는 프로그램을 작성하시오.

해당 알고리즘을 차례대로 구현하였다.

e.g. 10 7
2, 4, 6, 8, 10, 3, **9**, 5, 7

7번째로 지워진 수는 **9** 이다.

```javascript
const [N, K] = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split(' ')
    .map(Number);

const arr = Array(N + 1)
    .fill(true)
    .fill(false, 0, 2);
let cnt = 1;

for (let i = 2; i <= N; i++) {
    let j = 2;

    if (arr[i]) {
        arr[i] = false;

        if (cnt === K) {
            console.log(`${i}`);
        }
        cnt++;
    }

    while (i * j <= N) {
        if (arr[i * j]) {
            arr[i * j] = false;

            if (cnt === K) {
                console.log(`${i * j}`);
            }
            cnt++;
        }
        j++;
    }
}
```

## 소요시간

30 분

## 어려웠던 점

## 배운 점

에라토스테네스 체 알고리즘을 학습

## 궁금한 점
