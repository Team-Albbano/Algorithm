<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2504/괄호의 값

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2504)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

스택을 활용하여 해결한 문제이다.

(, [ 가 나오면 스택에 해당 기호를 담아 주었으며, ), ] 에 스택에 마지막으로 담긴 값이 (, [ 인 경우 마지막에 담긴 값을 pop() 을 통해 뽑은 후, 2, 3을 스택에 push()로 담아주었다.

), ] 가 나오고 스택의 마지막으로 담긴 값이 숫자이며, 마지막으로 담긴 값 앞의 값이 (, [ 일 경우 마지막에 담긴 값(숫자)를 pop()으로 뽑고, pop()을 한번 더 실행해 (, [ 를 제거하고 뽑은 숫자에 2, 3을 곱해 스택에 push()로 담아주었다.

이도 저도 아닌 경우의 input[i] 값이 나오면 0을 출력하도록 만들었다.

그리고 해당 조건을 검사한 후 스택에 담긴 마지막 값과 마지막 앞의 값이 둘다 숫자형일 경우 pop()을 두번 사용해서 뽑은 두 값을 더한 값을 스택에 새로 담아주었다.

반복문이 종료되면 스택에 담긴 수가 하나여야 하고, 담긴 값이 숫자형이여야 되므로 이를 검사하는 조건을 만들어서 정답을 출력하도록 만들었다.

```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

function solution(input) {
    const stack = [];
    let ans = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === '(' || input[i] === '[') {
            stack.push(input[i]);
        } else if (input[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
            stack.push(2);
        } else if (input[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
            stack.push(3);
        } else if (input[i] === ')' && typeof stack[stack.length - 1] === 'number' && stack[stack.length - 2] === '(') {
            const num = stack.pop();
            stack.pop();
            stack.push(num * 2);
        } else if (input[i] === ']' && typeof stack[stack.length - 1] === 'number' && stack[stack.length - 2] === '[') {
            const num = stack.pop();
            stack.pop();
            stack.push(num * 3);
        } else {
            return 0;
        }

        if (typeof stack[stack.length - 1] === 'number' && typeof stack[stack.length - 2] === 'number') {
            const first = stack.pop();
            const second = stack.pop();
            stack.push(first + second);
        }
    }

    if (stack.length === 1 && typeof stack[0] === 'number') {
        ans = stack.pop();
    }

    return ans;
}

const answer = solution(input);
console.log(answer);
```

## 소요시간

3시간

## 어려웠던 점

## 배운 점

Stack 활용, 경우의 수를 다양하게 생각해 시간이 생각보다 많이 소요된 문제

## 궁금한 점
