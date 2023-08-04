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
  let startX = 0;
  let startY = 0;
  const map = arr.map((lines, i) => {
    const arr = lines.split(' ').map(Number);
    for (let j = 0; j < m; ++j) {
      if (arr[j] === 2) {
        startX = i;
        startY = j;
      }
    }
    return lines.split(' ').map(Number)
  });
  const dist = Array.from(Array(n), _ => Array(m).fill(0));
  bfs(startX, startY, map, dist);
  let ans = '';
  for (let i = 0; i < n; ++i) {
    let s = '';
    for (let j = 0; j < m; ++j) {
      if (dist[i][j] === 0 && map[i][j] === 1) {
        s += -1 + ' ';
      }
      else
        s += dist[i][j] + ' ';
    }
    ans += s + '\n';
  }
  console.log(ans);
}

function bfs(startX, startY, map, dist) {
  const queue = new LinkedList();
  queue.offer({x: startX, y: startY});
  dist[startX][startY] = 0;
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
      if (dist[nx][ny] !== 0)
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
