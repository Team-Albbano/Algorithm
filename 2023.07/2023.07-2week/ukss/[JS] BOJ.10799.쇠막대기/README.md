<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 10799/쇠막대기

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/10799)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

스택을 활용하여 해결한 문제이다.

스택을 만들기 위한 배열을 만들어 입력값을 반복문을 돌려 () 연속으로 나올 경우 스택의 길이를 더해주었고, ( 가 나올경우 스택에 담아주어 새로운 쇠막대기가 추가된 것을 나타내었고, )가 나올경우 이를 pop으로 뽑아줘 쇠막대기 한개가 끝이 났음을 나타내었다. 그리고 끝이 났으니 남은 쇠막대기 조각이 생기기에 한개를 더해주었다.

```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

function solution(input) {
    const stack = [];
    let num = 0;

    for (let i = 0; i < input.length; i++) {
        let str = input[i];

        if (str === '(' && input[i + 1] === ')') {
            num += stack.length;
            i++;
        } else if (str === '(') {
            stack.push('(');
        } else {
            stack.pop();
            num++;
        }
    }

    return num;
}

const answer = solution(input);
console.log(answer);
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

Stack 활용

## 궁금한 점
