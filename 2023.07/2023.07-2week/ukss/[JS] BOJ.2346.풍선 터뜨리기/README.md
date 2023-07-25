<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 2346/풍선 터뜨리기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/2346)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

스택과 객체를 사용해서 접근하였다.

우선 1부터 N까지의 수를 스택에 담아주었으며, 풍선 안의 종이에 적혀있는 수를 풍선에 맞게 객체의 값으로 넣어 풍선이 터질때마다 객체에서 키값에 맞는 값을 불러와 해당 값 만큼 스택을 활용해 풍선을 점점 제거하며 이를 풀어나갔다.

그러나 "메모리 제한 : 4MB" 앞에서 무너졌으며,, 메모리 초과로 인해 채점이 불가능한 문제였다 ㅠ

```javascript
const [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(n, input) {
    const num = +n;
    const list = input.toString().trim().split(' ').map(Number);
    const obj = {};
    const stack = [];
    const ans = [];

    for (let i = 1; i <= num; i++) {
        obj[i] = list[i - 1];
        stack.push(i);
    }

    while (stack.length) {
        let key = 0;
        let move = 0;
        let temp = 0;

        key = stack.shift();
        key && ans.push(key);

        move = obj[key];
        move > 0 && move--;

        if (move > 0) {
            for (let i = 0; i < move; i++) {
                temp = stack.shift();
                stack.push(temp);
            }
        } else if (move < 0) {
            for (let i = 0; i < Math.abs(move); i++) {
                temp = stack.pop();
                stack.unshift(temp);
            }
        }
    }

    return ans;
}

const answer = solution(N, input);
console.log(...answer);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

Object, Stack 활용

(node.js 에 대한 메모리 할당,,, 넉넉하게 줬으면 좋겠다 ㅠ\_ㅜ)

## 궁금한 점
