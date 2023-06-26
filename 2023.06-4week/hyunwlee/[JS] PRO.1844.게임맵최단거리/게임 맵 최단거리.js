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

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));
console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]));
