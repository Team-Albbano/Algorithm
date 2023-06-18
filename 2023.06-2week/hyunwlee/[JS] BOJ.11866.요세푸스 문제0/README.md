# [JS] BOJ 11866/요세푸스 문제0

[문제 링크](https://www.acmicpc.net/problem/11866)

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
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  offer(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.size;
  }
  poll() {
    const retNode = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.head = null;
      this.tail = null;
    }
    --this.size;
    return retNode;
  }
  isEmpty() {
    return this.size === 0;
  }
}

function solution() {
  const [n, k] = input[0].split(" ").map(Number);
  const queue = new LinkedList();
  for (let i = 1; i <= n; ++i) {
    queue.offer(i);
  }
  let cnt = k;
  const ans = [];
  while (!queue.isEmpty()) {
    const node = queue.poll();
    if (--cnt === 0) {
      ans.push(node);
      cnt = k;
      continue;
    }
    queue.offer(node);
  }
  console.log("<" + ans.join(", ") + ">");
}
```

## 소요시간

10분

## 어려웠던 점

## 배운 점

## 궁금한 점
