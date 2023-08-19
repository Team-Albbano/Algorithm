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
  const doyeon = {x: null, y: null};
  const check = Array.from(Array(n), () => Array(m).fill(false));
  const map = arr.map((lines, i) => (
    lines.split('').map((item, j) => {
      if (item === 'I') {
        doyeon.x = i;
        doyeon.y = j;
      }
      return item;
    })
  ));
  const ans = (bfs(doyeon, map, check));
  console.log(ans === 0 ? 'TT' : ans);
}

function bfs(startPoint, map, check) {
  let cnt = 0;
  const queue = new LinkedList();
  queue.offer(startPoint);
  check[startPoint.x][startPoint.y] = true;
  while (!queue.isEmpty()) {
    const {x: nowX, y: nowY} = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx < 0 || nx >= map.length)
        continue;
      if (ny < 0 || ny >= map[0].length)
        continue;
      if (check[nx][ny])
        continue;
      if (map[nx][ny] === 'X')
        continue;
      check[nx][ny] = true;
      if (map[nx][ny] === 'P')
        ++cnt;
      queue.offer({x: nx, y: ny});
    }
  }
  return cnt;
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
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
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
