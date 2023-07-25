# [JS] BOJ 11724/연결 요소의 개수

[문제 링크](https://www.acmicpc.net/problem/11724)

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

function solution() {
  const [nm, ...lines] = input;
  const [n, _] = nm.split(' ').map(Number);
  const list = Array.from(Array(n + 1), _ => []);
  const check = Array.from(Array(n + 1), _ => false);
  lines.forEach(line => {
    const [from, to] = line.split(' ').map(Number);
    list[from].push(to);
    list[to].push(from);
  })
  let ans = 0;
  for (let i = 1; i <= n; ++i) {
    if (!check[i]) {
      bfs(i, list, check);
      ++ans;
    }
  }
  console.log(ans);
}

function bfs(start, list, check) {
  const queue = new LinkedList();
  queue.offer(start);
  check[start] = true;
  while (!queue.isEmpty()) {
    const now = queue.poll();
    list[now].forEach(next => {
      if (!check[next]) {
        check[next] = true;
        queue.offer(next);
      }
    });
  }
}

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
  offer(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.size;
  }
  poll() {
    const polledValue = this.tail.value;
    this.head = this.head.next;
    if (!this.head)
      this.tail = null;
    --this.size;
    return polledValue;
  }
  isEmpty() {
    return this.size === 0;
  }
}
```
## 소요시간
15분

## 어려웠던 점

## 배운 점

## 궁금한 점
