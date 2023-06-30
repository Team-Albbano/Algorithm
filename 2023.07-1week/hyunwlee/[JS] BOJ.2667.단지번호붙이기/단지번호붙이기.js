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
  let [n, ...arr] = input;
  n = Number(n);
  arr = arr.map(item => (item.split('').map(Number)));
  const check = Array.from(Array(n), _ => Array(n).fill(false));
  let numDanji = 0;
  let cntAns = [];
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr[0].length; ++j) {
      if (arr[i][j] === 1 && !check[i][j]) {
        ++numDanji;
        cntAns.push(bfs(i, j, arr, check));
      }
    }
  }
  if (numDanji === 0) {
    console.log(0);
    console.log(0);
    return ;
  }
  cntAns.sort((a, b) => (a - b));
  console.log(numDanji);
  console.log(cntAns.join('\n'));
}

function bfs(sX, sY, arr, check) {
  const queue = new LinkedList();
  queue.offer({x: sX, y: sY});
  check[sX][sY] = true;
  let ret = 1;
  while (!queue.isEmpty()) {
    const {x: nowX, y: nowY} = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx < 0 || nx >= arr.length)
        continue;
      if (ny < 0 || ny >= arr[0].length)
        continue;
      if (arr[nx][ny] !== 1)
        continue;
      if (check[nx][ny])
        continue;
      check[nx][ny] = true;
      queue.offer({x: nx, y: ny});
      ++ret;
    }
  }
  return ret;
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
