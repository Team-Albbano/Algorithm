<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 6588/골드바흐의 추측

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/6588)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

백만 이하의 모든 짝수에 대해서, 골드바흐의 추축을 검증하는 프로그램을 만드는 문제였다.

처음에는 1,000,000 범위의 array 를 만들어 에라토스테네스의 체 알고리즘을 구현해서 꺼내쓰는 방식으로 구현했으나, 시간 초과라는 문제가 발생하였다.

그래서 입력값들 중 최대값을 구해 이에 맞게 에라토스테네스의 체 알고리즘을 구현한 배열을 만들었고, 이에 테스트 케이스를 n = a + b 형태로 출력하며, a 와 b 는 **홀수** 소수 라는 조건이 있어 입력값을 map 으로 순환시켜, a, b가 홀수만 뽑을 수 있게 설계하였고 주어진 출력조건에 맞게 ans 배열에 담아주었다.

```javascript
const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .slice(0, -1)
    .map(Number);

const max = Math.max(...input);
const ans = [];

const arr = Array(max + 1)
    .fill(true)
    .fill(false, 0, 2);

for (let i = 2; i * i <= max; i++) {
    if (arr[i]) {
        let j = 2;

        while (i * j <= max) {
            arr[i * j] = false;
            j++;
        }
    }
}

input.map((num) => {
    for (let i = 3; i <= num; i += 2) {
        if (arr[i] && arr[num - i]) {
            ans.push(`${num} = ${i} + ${num - i}`);
            break;
        }
    }
});

console.log(ans.join('\n'));
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

에라토스테네스 체 알고리즘을 학습

## 궁금한 점
