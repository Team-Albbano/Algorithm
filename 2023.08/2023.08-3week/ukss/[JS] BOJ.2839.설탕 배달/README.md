<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2839/설탕 배달

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2839)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

while 반복문을 활용해서 입력값에서 3씩 빼주면서 조건을 비교해주는 식으로 진행했다.
단계가 진행될 때마다 cnt 값을 증가 시켜 봉지수를 체크했는데, 최대한 적게 배달할 수 있게 5킬로그램 봉지로 담을 수 있을 때, 즉 5로 나눴을 때 나머지가 0일 때 5킬로그램 봉지수를 한번에 측정하여 최소 봉지 수를 구할 수 있게 코드를 제작했다.

```javascript
const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
    let cnt = 0;
    let total = n;

    while (true) {
        if (total % 5 === 0) {
            cnt += parseInt(total / 5);
            break;
        }

        if (total < 0) {
            cnt = -1;
            break;
        }

        total -= 3;
        cnt++;
    }

    return cnt;
}

const ans = solution(input);
console.log(ans);
```

## 소요시간

## 어려웠던 점

## 배운 점

## 궁금한 점
