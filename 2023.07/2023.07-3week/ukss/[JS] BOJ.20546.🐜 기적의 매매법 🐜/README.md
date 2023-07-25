<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 20546/🐜 기적의 매매법 🐜

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/20546)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

준현(junhyeon) 방식과 성민(seongmin) 함수를 따로 만들어 각자 수익률을 계산할 수 있도록 만들었다.

준현(junhyeon) 함수에는 BNP 전략을 구현할 수 있도록 money 가 stock 보다 크거나 같을 경우 전량을 사버릴 수 있도록 while 문을 사용했으며, 성민(seongmin) 함수에는 TIMING 전략을 구현할 수 있도록 3일 연속 가격이 전일 대비 상승하는 경우, 하락하는 경우에 따라 구현을 달리하고, 이를 판단할 수 있도록 전날 주식 값과 현재 주식 값을 비교하여 이에 맞게 경우를 나눠 기능을 구현하였다.

solution 함수에서 두 방식의 값의 크기를 비교하여 문제에서 요구하는 방식으로 출력할 수 있게 구현하였다.

```javascript
const [money, list] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const chart = list.split(' ').map(Number);

function junhyeon(input) {
    let money = Number(input);
    let holdingStock = 0;
    for (let stock of chart) {
        while (money >= stock) {
            money -= stock;
            holdingStock++;
        }
    }

    const answer = money + chart[chart.length - 1] * holdingStock;
    return answer;
}

function seongmin(input) {
    let money = Number(input);
    let holdingStock = 0;
    let temp = 0;
    let increase = 0;
    let decrease = 0;

    for (let stock of chart) {
        if (temp < stock) {
            increase++;
            decrease = 0;
        } else if (temp > stock) {
            decrease++;
            increase = 0;
        } else {
            increase = 0;
            decrease = 0;
        }

        if (increase >= 3) {
            while (holdingStock) {
                money += stock;
                holdingStock--;
            }
        } else if (decrease >= 3) {
            while (money >= stock) {
                money -= stock;
                holdingStock++;
            }
        }

        temp = stock;
    }

    const answer = money + chart[chart.length - 1] * holdingStock;
    return answer;
}

const BNP = junhyeon(money);
const TIMING = seongmin(money);

function solution(BNP, TIMING) {
    if (BNP > TIMING) {
        return 'BNP';
    } else if (BNP < TIMING) {
        return 'TIMING';
    } else {
        return 'SAMESAME';
    }
}

const answer = solution(BNP, TIMING);
console.log(answer);
```

## 소요시간

1 시간

## 어려웠던 점

## 배운 점

구 현 !

## 궁금한 점
