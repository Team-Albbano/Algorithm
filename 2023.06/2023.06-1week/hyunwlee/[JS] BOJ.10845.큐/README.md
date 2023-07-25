# [JS] BOJ 10845/큐

[문제 링크](https://www.acmicpc.net/problem/10845)

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
    ++this.size;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }
  poll() {
    const retNode = this.head.value;
    this.head = this.head.next;
    --this.size;
    if (!this.head) {
      this.tail = null;
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
  const queue = new LinkedList();
  let ans = "";
  arr.forEach((item) => {
    const [command, num] = item.split(" ");
    if (command === "push") {
      queue.offer(num);
    } else if (command === "pop") {
      if (queue.isEmpty()) ans += "-1\n";
      else ans += queue.poll() + "\n";
    } else if (command === "front") {
      if (queue.isEmpty()) ans += "-1\n";
      else ans += queue.front() + "\n";
    } else if (command === "back") {
      if (queue.isEmpty()) ans += "-1\n";
      else ans += queue.back() + "\n";
    } else if (command === "size") {
      ans += queue.size + "\n";
    } else if (command === "empty") {
      if (queue.isEmpty()) ans += "1\n";
      else ans += "0\n";
    }
  });
  console.log(ans);
}
```

## 소요시간

5분

## 어려웠던 점

## 배운 점

## 궁금한 점
