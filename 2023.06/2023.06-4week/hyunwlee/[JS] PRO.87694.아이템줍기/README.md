# [JS] PRO 87694/아이템 줍기

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/87694)

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

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const map = Array.from(Array(103), _ => Array(103).fill(0));
  const doubleRectangle = rectangle.map((item) => 
    item.map(point => (point * 2))
  );
  doubleRectangle.forEach(([ys, xs, ye, xe]) => {
    for (let i = xs; i <= xe; i++) {
      for (let j = ys; j <= ye; j++) {
        if (i === xs || i === xe || j === ys || j === ye) {
          if (map[i][j] === 1) {
            continue;
          } else {
            map[i][j] += 1; // 테두리인 경우는 값을 1로 설정
          }
        } else {
          map[i][j] += 2; // 테두리가 아닌 경우
        }
      }
    }
  });
  return bfs({cy: characterX * 2, cx: characterY * 2}, {iy: itemX * 2, ix: itemY * 2}, map);
}

function bfs({cx, cy}, {ix, iy}, map) {
  const queue = new LinkedList();
  queue.offer({x: cx, y: cy});
  const dist = Array.from(Array(103), _ => Array(103).fill(0));
  dist[cx][cy] = 1;
  while (!queue.isEmpty()) {
    const {x: nowX, y: nowY} = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx < 0 || nx >= map.length)
        continue;
      if (ny < 0 || ny >= map[0].length)
        continue;
      if (dist[nx][ny] !== 0)
        continue;
      if (map[nx][ny] !== 1)
        continue;
      dist[nx][ny] = dist[nowX][nowY] + 1;
      queue.offer({x: nx, y: ny});
    }
  }
  return Math.floor(dist[ix][iy] / 2);
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
    return (this.size === 0);
  }
}

console.log(solution([[1,1,7,4],[3,2,5,5],[4,3,6,9],[2,6,8,8]], 1, 3, 7, 8));
console.log(solution([[1,1,8,4],[2,2,4,9],[3,6,9,8],[6,3,7,7]], 9, 7, 6, 1));
console.log(solution([[1,1,5,7]], 1, 1, 4, 7));
console.log(solution([[2,1,7,5],[6,4,10,10]], 3, 1, 7, 10));
console.log(solution([[2,2,5,5],[1,3,6,4],[3,1,4,6]], 1, 4, 6, 3));
```

## 소요시간
구글링 했다..

## 어려웠던 점
1. 겹치는 부분을 제외한 테두리만을 표시하는 법
2. 

![](https://velog.velcdn.com/images%2Ftnehd1998%2Fpost%2F55295133-e8c3-4910-a6b3-c761c3d5255e%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-02-16%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.14.43.png)

- 컴퓨터는 우회할 줄 모름 바로 위로 이동함
- 좌표에 관한 모든것을 2배해주고 결과를 2로 나누는 방법

너무어려웠고, 생소했던 BFS문제. 다시 풀어보면 좋을 듯
## 배운 점

## 궁금한 점
