<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 10816/숫자 카드 2

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/10816)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

이분 탐색으로 해결한 문제이다.

값의 존재 유무가 아닌, 존재하면 몇 장 존재하는지 까지 출력하는 문제이다.

그래서 2차원 배열을 사용해서 이를 해결했다. 우선 card 를 따로 뽑아 이를 오름차순 정렬을 한 후, cardCnt 배열을 만들어 card 의 인덱스 0번 값을 넣고, 수량으로 1을 넣었다.

이후 반복문을 사용해 다음 인덱스 값과 비교하여 동일한 값이면 수량을 증가시키고, 그렇지 않을 경우 cardCnt 에 해당 숫자와 수량 1로 추가시켰다. 이렇게 카드 별 수량들을 담을 수 있었다.

이후 이분 탐색을 통해서 해당 카드가 존재하면 앞서 담아뒀던 카드의 수량을 ans 배열에 담아 이를 출력하여 문제를 해결하였다.

```javascript
const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n');

const [N, card, M, check] = input.map((v) => v.split(' ').map(Number));

card.sort((a, b) => a - b);
let cardCnt = [[card[0], 1]];

for (let i = 1; i < card.length; i++) {
    if (card[i - 1] === card[i]) {
        cardCnt[cardCnt.length - 1][1]++;
    } else {
        cardCnt.push([card[i], 1]);
    }
}

const ans = [];

check.forEach((item) => {
    let left = 0;
    let right = cardCnt.length - 1;
    let mid = Math.floor((left + right) / 2);
    let status = false;

    while (left <= right) {
        if (item === cardCnt[mid][0]) {
            ans.push(cardCnt[mid][1]);
            status = true;
            break;
        } else if (item > cardCnt[mid][0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((left + right) / 2);
    }

    !status && ans.push(0);
});

console.log(...ans);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

## 궁금한 점
