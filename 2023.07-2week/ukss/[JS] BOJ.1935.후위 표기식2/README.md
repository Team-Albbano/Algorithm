<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 1935/후위 표기식2

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/1935)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

후위 표기식의 원리를 이해하고 시작한 문제였다.

후위 표기식이란 35+ 와 같이 **연산자가 피연산자 뒤에 있는 표기식**이다.
예를 들어 중위 표기식이 3+5*2 를 후위 표기식으로 표현하면 352*+ 로 표현된다

즉 스택을 활용해서 숫자가 나타날 때는 값을 스택에 담아준 후, 연산 기호가 나타나면 스택에서 값을 뽑아서 연산을 해주어 해당 값을 다시 스택에 넣어주는 식으로 진행하면 이를 구현할 수 있었다.

그리고 알파벳에 따라 숫자가 지정되기에 이를 객체를 사용해서 값을 넣어주었고, 똑같은 알파벳이 나타날 때마다 지정된 숫자를 스택에 담아주어 해당 식을 진행할 수 있도록 구현하였다.

```javascript
const [N, exp, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(N, exp, input) {
    const expression = exp.split('');
    const list = input.map(Number);
    const stack = [];
    let ans = 0;

    const alp = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0,
        H: 0,
        I: 0,
        J: 0,
        K: 0,
        L: 0,
        M: 0,
        N: 0,
        O: 0,
        P: 0,
        Q: 0,
        R: 0,
        S: 0,
        T: 0,
        U: 0,
        V: 0,
        W: 0,
        X: 0,
        Y: 0,
        Z: 0,
    };

    for (let i = 0; i < expression.length; i++) {
        if (Object.keys(alp).includes(expression[i])) {
            if (alp[expression[i]] === 0) {
                const num = list.shift();
                alp[expression[i]] = num;
            }

            stack.push(alp[expression[i]]);
        } else {
            const second = stack.pop();
            const first = stack.pop();
            let value = 0;

            if (expression[i] === '+') {
                value = first + second;
            } else if (expression[i] === '-') {
                value = first - second;
            } else if (expression[i] === '*') {
                value = first * second;
            } else if (expression[i] === '/') {
                value = first / second;
            }

            stack.push(value);
        }
    }

    ans = stack.shift().toFixed(2);
    return ans;
}

const answer = solution(N, exp, input);
console.log(answer);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

Object, Stack 활용

## 궁금한 점
