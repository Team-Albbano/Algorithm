# [JS] BOJ 11286/절댓값 힙

[문제 링크](https://www.acmicpc.net/problem/11286)

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
  let [_, ...arr] = input;
  arr = arr.map(Number);
  const pq = new PriorityQueue((a, b) => {
    if (Math.abs(a) < Math.abs(b)) {
      return (true);
    }
    else if (Math.abs(a) === Math.abs(b)) {
      if (a < b)
        return (true);
      return (false);
    }
    else {
      return (false);
    }
  });
  let s = '';
  arr.forEach(item => {
    if (item === 0) {
      if (pq.isEmpty())
        s += 0 + '\n';
      else
        s += pq.poll() + '\n';
    }
    else {
      pq.offer(item);
    }
  });
  console.log(s);
}

const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }
  size() {
    return this._heap.length;
  }
  isEmpty() {
    return this.size() == 0;
  }
  peek() {
    return this._heap[top];
  }
  offer(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }
  poll() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }
  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }
  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }
  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }
  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}
```
## 소요시간
90분

## 어려웠던 점
이상하게 comparator를 정의해 넣었는데
- 안되는 코드
```
const pq = new PriorityQueue((a, b) => {
  if (Math.abs(a) < Math.abs(b)) {
    return (Math.abs(a) < Math.abs(b));
  }
  else if (Math.abs(a) === Math.abs(b)) {
    if (a < b)
      return (a < b);
    return (a > b);
  }
  else {
    return (Math.abs(a) > Math.abs(b));
  }
});
```
- 되는 코드
```
const pq = new PriorityQueue((a, b) => {
  if (Math.abs(a) < Math.abs(b)) {
    return (true);
  }
  else if (Math.abs(a) === Math.abs(b)) {
    if (a < b)
      return (true);
    return (false);
  }
  else {
    return (false);
  }
});

```
정확하게 boolean형으로 return을 정의해주지 않으면 원했던 sift가 되지 않았다..

## 배운 점

## 궁금한 점
