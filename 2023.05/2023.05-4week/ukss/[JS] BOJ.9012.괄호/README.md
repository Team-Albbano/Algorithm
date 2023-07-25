<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 9012/괄호

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/9012)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

괄호 문자열이 (로 시작하면 )로 닫혀야 구성되는 문자열임으로 ( 이 들어오면 스택으로 쌓아주고, ) 이 들어오면 스택으로 뽑아주면 되겠다고 생각하였다.

괄호 문자열이 올바른지 (VPS) 검사만 하면 되기에 수를 카운팅 하는 방식으로 설계하였으며, ( 이 들어오면 + 1, ) 이 들어오면 -1 인 식으로 설계하여 최종적으로 합계가 0 이면 YES 를 출력하도록 만들었다.

다만 ) 이게 들어와도 스택이 비어있을 경우에는 괄호 문자열이 올바르지 않기에 vpsCheck 변수를 따로 만들어 false 로 바꾸어 NO 가 출력되도록 만들었다.

```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...parenthesis] = input;

function solution(n, parenthesis) {
  let answer = '';

  for (let i = 0; i < n; i++) {
    const part = parenthesis[i].split('');
    let stack = 0;
    let vpsCheck = true;

    for (let j = 0; j < part.length; j++) {
      switch (part[j]) {
        case '(':
          stack += 1;
          break;

        case ')':
          if (stack === 0) {
            vpsCheck = false;
          } else {
            stack -= 1;
          }
          break;

        default:
          break;
      }
    }

    if (stack === 0 && vpsCheck) {
      answer += 'YES';
    } else {
      answer += 'NO';
    }

    answer += ' ';
  }

  return answer.split(' ').join('\n');
}

const answer = solution(n, parenthesis);
console.log(answer);
```

## 소요시간

30분

## 어려웠던 점

## 배운 점

## 궁금한 점
