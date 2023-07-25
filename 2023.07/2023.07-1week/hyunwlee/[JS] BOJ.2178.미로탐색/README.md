# [JS] BOJ 2178/미로 탐색

[문제 링크](https://www.acmicpc.net/problem/2178)

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

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function solution() {
  const [nm, ...arr] = input;
  const [n, m] = nm.split(' ').map(Number);
  const map = arr.map(item => {
    return item.split('').map(Number);
  });
  console.log(bfs(n, m, map));
}

function bfs(n, m, map) {
  const queue = new LinkedList();
  const dist = Array.from(Array(n), _ => Array(m).fill(-1));
  queue.offer({x: 0, y: 0});
  dist[0][0] = 1;
  while (!queue.isEmpty()) {
    const {x: nowX, y: nowY} = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx < 0 || nx >= map.length)
        continue;
      if (ny < 0 || ny >= map[0].length)
        continue;
      if (map[nx][ny] !== 1)
        continue;
      if (dist[nx][ny] !== -1)
        continue;
      dist[nx][ny] = dist[nowX][nowY] + 1;
      queue.offer({x: nx, y: ny});
    }
  }
  return dist[n - 1][m - 1];
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
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
    const retValue = this.head.value;
    this.head = this.head.next;
    if (!this.head)
      this.tail = null;
    --this.size;
    return retValue;
  }
  isEmpty() {
    return this.size === 0;
  }
}
```

## 소요시간
10분

## 어려웠던 점

## 배운 점

## 궁금한 점
