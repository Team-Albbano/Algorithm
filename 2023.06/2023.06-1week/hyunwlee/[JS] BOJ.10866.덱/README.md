# [JS] BOJ 10866/덱

[문제 링크](https://www.acmicpc.net/problem/10866)

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

class Node {
  constructor(item) {
    this.value = item;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push_front(item) {
    const newNode = new Node(item);
    ++this.size;
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else if (this.size === 1) {
      const node = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.head.next = node;
      this.tail = node;
    } else {
      const node = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.head.next = node;
    }
  }
  push_back(item) {
    const newNode = new Node(item);
    ++this.size;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.size === 1) {
      const node = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = node;
      this.head = node;
    } else {
      const node = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = node;
    }
  }
  pop_front() {
    const retNode = this.head.value;
    --this.size;
    this.head = this.head.next;
    if (!this.head) {
      this.head = null;
      this.tail = null;
    } else if (this.size === 1) {
      this.head.next = null;
      this.tail.prev = null;
    }
    return retNode;
  }
  pop_back() {
    const retNode = this.tail.value;
    --this.size;
    this.tail = this.tail.prev;
    if (!this.tail) {
      this.head = null;
      this.tail = null;
    } else if (this.size === 1) {
      this.head.next = null;
      this.tail.prev = null;
    }
    return retNode;
  }
  isEmpty() {
    return this.size === 0;
  }
  front() {
    return this.head.value;
  }
  back() {
    return this.tail.value;
  }
}

function solution() {
  const [n, ...arr] = input;
  const dequeue = new DoubleLinkedList();
  let ans = "";
  arr.forEach((item) => {
    const [command, num] = item.split(" ");
    if (command === "push_back") {
      dequeue.push_back(num);
    } else if (command === "push_front") {
      dequeue.push_front(num);
    } else if (command === "pop_front") {
      if (dequeue.isEmpty()) ans += "-1\n";
      else ans += dequeue.pop_front() + "\n";
    } else if (command === "pop_back") {
      if (dequeue.isEmpty()) ans += "-1\n";
      else ans += dequeue.pop_back() + "\n";
    } else if (command === "front") {
      if (dequeue.isEmpty()) ans += "-1\n";
      else ans += dequeue.front() + "\n";
    } else if (command === "back") {
      if (dequeue.isEmpty()) ans += "-1\n";
      else ans += dequeue.back() + "\n";
    } else if (command === "size") {
      ans += dequeue.size + "\n";
    } else if (command === "empty") {
      if (dequeue.isEmpty()) ans += "1\n";
      else ans += "0\n";
    }
  });
  console.log(ans);
}
```

## 소요시간

45분

## 어려웠던 점

## 배운 점

덱은 항상 size가 1일때도 고려해줘야 하는 자료구조

## 궁금한 점
