# [JS] BOJ 1012/유기농 배추

[문제 링크](https://www.acmicpc.net/problem/1012)

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
  const [, ...arr] = input;
  let i = 0;
  while (i < arr.length) {
    const [m, n, k] = arr[i++].split(' ').map(Number);
    const map = Array.from(Array(n), _ => Array(m).fill(false));
    let j = i - 1;
    while (++j < i + k) {
      const [y, x] = arr[j].split(' ').map(Number);
      map[x][y] = true;
    }

    let ans = 0;
    for (let x = 0; x < map.length; ++x) {
      for (let y = 0; y < map[0].length; ++y) {
        if (map[x][y]) {
          bfs(x, y, map);
          ++ans;
        }
      }
    }
    console.log(ans);
    i += k;
  }
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function bfs(startX, startY, map) {
  const queue = new LinkedList();
  queue.offer({x: startX, y: startY});
  while (!queue.isEmpty()) {
    const {x, y} = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nX = x + dx[i];
      const nY = y + dy[i];
      if (0 > nX || nX >= map.length) continue;
      if (0 > nY || nY >= map[0].length) continue;
      if (!map[nX][nY]) continue;
      map[nX][nY] = false;
      queue.offer({x: nX, y: nY});
    }
  }
}

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
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
    if (!this.head) {
      this.tail = null;
    }
    --this.size;
    return (retValue);
  }
  isEmpty() {
    return (this.size === 0);
  }
}
```

## 소요시간

20분

## 어려웠던 점

## 배운 점

## 궁금한 점
