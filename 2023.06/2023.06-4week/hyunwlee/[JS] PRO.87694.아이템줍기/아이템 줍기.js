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
  let s = '';
  for (let i = 0; i < 30; ++i) {
    for (let j = 0; j < 30; ++j) {
      if (map[i][j] === 1)
        s += 'O';
      else
        s += 'X';
    }
    s += '\n';
  }
  // console.log(s);
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
