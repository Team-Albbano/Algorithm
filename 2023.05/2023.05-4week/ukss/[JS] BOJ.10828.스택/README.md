<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 10828/스택

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/10828)

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

큐 1, 큐 2 문제를 풀어보면서 LinkedList 방식으로 스택을 만들어서 진행하면 더 빠를까 싶어 그렇게 진행했으나 "틀렸습니다" 라는 메시지가 나타났다.

그래서 이번에는 array 배열을 사용해서 직접 js push, pop 기능을 사용해서 이를 구현했다.

자료구조 스택의 LIFO (Last In, First Out) 구조 개념을 이해한다면 쉽게 구현할 수 있었던 문제였다.

```javascript
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...commands] = input;

function solution(n, commands) {
  let answer = '';
  const stack = [];

  for (let i = 0; i < n; i++) {
    const command = commands[i].split(' ')[0];

    switch (command) {
      case 'push':
        const pushItem = commands[i].split(' ')[1];
        stack.push(pushItem);
        break;

      case 'pop':
        answer += stack.length ? stack.pop() : -1;
        answer += ' ';
        break;

      case 'size':
        answer += stack.length;
        answer += ' ';
        break;

      case 'empty':
        answer += stack.length ? 0 : 1;
        answer += ' ';
        break;

      case 'top':
        answer += stack.length ? stack[stack.length - 1] : -1;
        answer += ' ';
        break;

      default:
        break;
    }
  }

  return answer.split(' ').join('\n');
}

const answer = solution(n, commands);
console.log(answer);
```

## 추가 코드

스택 구조를 직접 짠 코드이다. (제출결과 : 틀렸습니다)

```jsx
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...commands] = input;

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);

    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.size += 1;
  }

  pop() {
    if (this.size > 1) {
      const item = this.top.item;
      const newTop = this.top.next;
      this.top = newTop;
      this.size -= 1;
      return item;
    } else if (this.size === 1) {
      const item = this.top.item;
      this.size -= 1;
      return item;
    } else {
      return -1;
    }
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size ? 0 : 1;
  }

  getTop() {
    return this.top ? this.top.item : -1;
  }
}

function solution(n, commands) {
  let answer = '';
  const stack = new Stack();

  for (let i = 0; i < n; i++) {
    const command = commands[i].split(' ')[0];

    switch (command) {
      case 'push':
        const pushItem = commands[i].split(' ')[1];
        stack.push(pushItem);
        break;

      case 'pop':
        answer += stack.pop() + ' ';
        break;

      case 'size':
        answer += stack.getSize() + ' ';
        break;

      case 'empty':
        answer += stack.isEmpty() + ' ';
        break;

      case 'top':
        answer += stack.getTop() + ' ';
        break;

      default:
        break;
    }
  }

  return answer.split(' ').join('\n');
}

const answer = solution(n, commands);
console.log(answer);
```

## 소요시간

자료구조를 더욱 공부해볼 것. ES6 문법을 따로 공부해봐야 할 것 같다.

## 어려웠던 점

## 배운 점

## 궁금한 점
