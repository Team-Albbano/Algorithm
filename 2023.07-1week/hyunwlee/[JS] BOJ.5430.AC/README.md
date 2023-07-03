# [JS] BOJ 5430/AC

[문제 링크](https://www.acmicpc.net/problem/5430)

<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

## Table of Contents

- [✍🏻 풀이](#풀이)
- [⏰ 소요시간](#소요시간)
- [🫠 어려웠던 점](#어려웠던-점)
- [😮 배운 점](#배운-점)
- [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

```javascript
const readline = require("readline");
const { isErrored } = require("stream");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
  process.exit();
});

function solution() {
  const [t, ...arr] = input;
  const ans = [];
  let tc = -1;
  while (++tc < t) {
    const commands = arr[0 + (3 * tc)].split('');
    const arrLength = arr[1 + (3 * tc)];
    const values = (arrLength === '0') ? [] : arr[2 + (3 * tc)].substring(1, arr[2 + (3 * tc)].length - 1).split(',').map(Number);
    let reverse = false;
    let isError = false;
    const dq = new DoublyLinkedList();
    values.forEach(value => {
      dq.offerRear(value);
    });
    for (const n of commands) {
      if (n === 'R') {
        if (reverse)
          reverse = false;
        else
          reverse = true;
      }
      else if (n === 'D') {
        if (dq.isEmpty()) {
          isError = true;
          break;
        }
        else if (!reverse)
          dq.pollFront();
        else
          dq.pollRear();
      }
      else {
        if (!reverse)
          dq.offerRear(n);
        else
          dq.offerFront(n);
      }
    }
    if (isError) {
      ans.push('error');
      continue;
    }
    const retArr = [];
    if (!reverse) {
      while (!dq.isEmpty()) {
        retArr.push(dq.pollFront());
      }
    }
    else {
      while (!dq.isEmpty()) {
        retArr.push(dq.pollRear());
      }
    }
    ans.push(retArr);
  }
  let s = '';
  for (const item of ans) {
    if (item === 'error') {
      s += item + '\n';
    }
    else {
      let temp = '[';
      temp += item.join(',');
      temp += ']\n';
      s += temp;
    }
  }
  console.log(s);
}

// R: 뒤집기
// D: 버리기

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  offerFront(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }
    else if (this.size === 1) {
      const node = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.head.next = node;
      this.tail.prev = newNode;
    }
    else {
      const node = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.head.next = node;
    }
    ++this.size;
  }
  offerRear(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else if (this.size === 1) {
      const node = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = node;
      this.head.next = newNode;
    }
    else {
      const node = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = node;
    }
    ++this.size;
  }
  pollFront() {
    const retValue = this.head.value; 
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    else if (this.size === 1) {
      this.head.next = null;
      this.tail.prev = null;
    }
    --this.size;
    return retValue;
  }
  pollRear() {
    const retValue = this.tail.value;
    this.tail = this.tail.prev;
    if (!this.tail) {
      this.head = null;
    }
    else if (this.size === 1) {
      this.head.next = null;
      this.tail.prev = null;
    }
    --this.size;
    return retValue;
  }
  isEmpty() {
    return this.size === 0;
  }
}
```

## 소요시간
30분

## 어려웠던 점
doublyLinkedList 구현

## 배운 점

## 궁금한 점
