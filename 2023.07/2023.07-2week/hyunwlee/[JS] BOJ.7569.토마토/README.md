# [JS] BOJ 7576/토마토

[문제 링크](https://www.acmicpc.net/problem/7576)

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
  const [mn, ...arr] = input;
  const [m, n] = mn.split(' ').map(Number);
  const startPoint = [];
  const dist = Array.from(Array(n), _ => Array(m).fill(-1));
  const map = arr.map((line, idx) => {
    const tomatos = line.split(' ').map(Number)
    tomatos.forEach((tomato, jdx) => {
      if (tomato === 1) {
        startPoint.push({x: idx, y: jdx});
        dist[idx][jdx] = 0;
      }
    })
    return tomatos;
  });
  const queue = new LinkedList();
  startPoint.forEach(p => {
    queue.offer(p);
  });
  bfs(queue, dist, map);
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (map[i][j] !== -1 && dist[i][j] < 0) {
        console.log(-1);
        return;
      }
      ans = Math.max(ans, dist[i][j]);
    }
  }
  console.log(ans);
}

function bfs(queue, dist, map) {
  while (!queue.isEmpty()) {
    const {x: nowX, y: nowY} = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx < 0 || nx >= map.length)
        continue;
      if (ny < 0 || ny >= map[0].length)
        continue;
      if (dist[nx][ny] !== -1)
        continue;
      if (map[nx][ny] !== 0)
        continue;
      dist[nx][ny] = dist[nowX][nowY] + 1;
      queue.offer({x: nx, y: ny});
    }
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
30분
## 어려웠던 점

## 배운 점

## 궁금한 점
