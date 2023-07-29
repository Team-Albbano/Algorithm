# [JS] BOJ 16928/뱀과 사다리 게임

[문제 링크](https://www.acmicpc.net/problem/16928)

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
  const [nm, ...arr] = input;
  const [n, _] = nm.split(' ').map(Number);
  const ladders = arr.splice(0, n).map(lines => lines.split(' ').map(Number));
  const snakes = arr.map(lines => lines.split(' ').map(Number));
  console.log(bfs(ladders, snakes));
}

function bfs(ladders, snakes) {
  const queue = new LinkedList();
  queue.offer(1);
  const dist = Array.from({length: 101}, _ => 0);
  const board = Array.from({length: 101}, (_, idx) => idx);
  for (const [from, to] of [...ladders, ...snakes]) {
    board[from] = to;
  }
  while (!queue.isEmpty()) {
    const now = queue.poll(); 
    for (let i = 1; i <= 6; ++i) {
      let next = now + i;
      if (next > 100)
        continue;
      next = board[next];
      if (dist[next] !== 0)
        continue;
      dist[next] = dist[now] + 1;
      queue.offer(next);
    }
  }
  return dist[100];
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
    const polledValue = this.head.value;
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
이전 풀이봄

## 어려웠던 점
최단 거리를 푸는문제로 bfs로 해야겠다고 알아챘지만, 주사위 이동과 이동한 곳에서 사다리, 뱀 이동처리가 동시적으로 처리에 어려움이 있었다.

## 배운 점

## 궁금한 점

