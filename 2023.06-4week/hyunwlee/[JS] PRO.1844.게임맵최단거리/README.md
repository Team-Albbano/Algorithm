# [JS] PRO 1844/게임 맵 최단거리

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/1844)

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
function solution(maps) {
  const dist = Array.from(Array(maps.length), _ => Array(maps[0].length).fill(-1));
  return bfs(dist, maps);
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
    if(!this.head) {
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

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
function bfs(dist, maps) {
  const queue = new LinkedList();
  queue.offer({x: 0, y: 0});
  dist[0][0] = 1;
  while (!queue.isEmpty()) {
    const {x, y} = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= maps.length)
        continue;
      if (ny < 0 || ny >= maps[0].length)
        continue;
      if (maps[nx][ny] === 0)
        continue;
      if (dist[nx][ny] !== -1)
        continue;
      dist[nx][ny] = dist[x][y] + 1;
      queue.offer({x: nx, y: ny});
    }
  }
  return (dist[maps.length - 1][maps[0].length - 1]);
}
```

## 소요시간
15분

## 어려웠던 점

## 배운 점

## 궁금한 점
