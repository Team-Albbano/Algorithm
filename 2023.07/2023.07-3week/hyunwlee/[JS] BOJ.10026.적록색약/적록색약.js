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
  const [n, ...arr] = input;
  const size = Number(n);
  const seekMap = arr.map(line => line.split(''));
  const noSeekMap = arr.map(line => (
    line.split('').map(color => {
      if (color === 'R' || color === 'G')
        return 'O';
      return color;
    })
  ))
  const check = Array.from(Array(size), _ => Array(size).fill(false));
  const noSeekCheck = Array.from(Array(size), _ => Array(size).fill(false));
  let seekAns = 0;
  let noSeekAns = 0;
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      if (!check[i][j]) {
        bfs(i, j, seekMap, check, seekMap[i][j], size);
        ++seekAns;
      }
    }
  }
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size; ++j) {
      if (!noSeekCheck[i][j]) {
        bfs(i, j, noSeekMap, noSeekCheck, noSeekMap[i][j], size);
        ++noSeekAns;
      }
    }
  }
  console.log(seekAns + ' ' + noSeekAns);
}

function bfs(startX, startY, map, check, color, size) {
  const queue = new LinkedList();
  queue.offer({x: startX, y: startY});
  check[startX][startY] = true;
  while (!queue.isEmpty()) {
    const {x: nowX, y: nowY} = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx < 0 || nx >= size)
        continue;
      if (ny < 0 || ny >= size)
        continue;
      if (check[nx][ny])
        continue;
      if (map[nx][ny] !== color)
        continue;
      check[nx][ny] = true;
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
