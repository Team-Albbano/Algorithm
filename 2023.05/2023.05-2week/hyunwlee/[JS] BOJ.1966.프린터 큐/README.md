# [JS] BOJ 1966/프린터 큐

[문제 링크](https://www.acmicpc.net/problem/1966)

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
    const tailNode = new Node(item);
    if (!this.head) {
      this.head = tailNode;
      this.tail = tailNode;
    }
    else {
      this.tail.next = tailNode;
      this.tail = tailNode;
    }
    ++this.size;
  }
  poll() {
    const headNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.head = null;
      this.tail = null;
    }
    --this.size;
    return headNode;
  }
  isEmpty() {
    return (this.size === 0);
  }
}

function solution() {
  const t = +input[0];
  for (let i = 0; i < t; ++i) {
    let [n, m] = input[2 * i + 1].split(' ').map(Number);
    const queue = new LinkedList();
    input[2 * i + 2].split(' ').forEach((item) => {
      queue.offer(item);
    });
    const sortedArray = input[2 * i + 2].split(' ').sort((a, b) => (b - a));
    let sortedArrayIndex = 0;
    let ans = 1;
    while (!queue.isEmpty() && sortedArrayIndex < sortedArray.length) {
      const polledNode = queue.poll();
      if (polledNode.value === sortedArray[sortedArrayIndex]) {
        if (m === 0) {
          console.log(ans);
          break;
        }
        ++sortedArrayIndex;
        ++ans;
      }
      else {
        queue.offer(polledNode.value);
      }
      if (m === 0) 
        m = queue.size - 1;
      else
        --m;
    }
  }
}
```

## 소요시간

40분 

## 어려웠던 점

queue자료구조를 짜보는데, 생각이 잘 안나서 오래걸렸고, 큐가 while문안에서 돌때마다 조건을 처리해줘야 하는 것도 까다로운 문제였다. 

## 배운 점 

## 궁금한 점
