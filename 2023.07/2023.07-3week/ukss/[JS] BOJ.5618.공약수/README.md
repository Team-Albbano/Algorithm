<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 5618/공약수

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/5618)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

자연수 n개를 배열로 담은 후, 1부터 배열에서 제일 큰 수 까지 반복문을 사용해서 배열에 존재하는 모든 요소가 나눠질 경우 check 변수에 수를 더해주며, check 변수의 값이 배열의 길이와 동일할 경우 해당 값이 공약수라는 의미임으로 이를 따로 뽑아 출력해주는 식으로 구현

```javascript
const [, list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = list.split(' ').map(Number);
const ans = [];

for (let i = 1; i <= Math.max(...num); i++) {
    let check = 0;
    num.forEach((n) => {
        if (n % i === 0) {
            check++;
        }
    });

    if (check === num.length) {
        ans.push(i);
    }
}

console.log(ans.join('\n'));
```

## 소요시간

10분

## 어려웠던 점

## 배운 점

## 궁금한 점
