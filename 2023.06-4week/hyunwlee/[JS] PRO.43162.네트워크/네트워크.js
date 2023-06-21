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

function solution(n, computers) {
  const check = Array.from({length: 200}, _ => false);
  let ans = 0;
  for (let i = 0; i < computers.length; ++i) {
    if (!check[i]) {
      bfs(i, check, computers);
      ++ans;
    }
  }
  return ans;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function bfs(start, check, computers) {
  const queue = new LinkedList();
  queue.offer(start);
  check[start] = true;
  while(!queue.isEmpty()) {
    const node = queue.poll();
    for (let i = 0; i < computers.length; ++i) {
      if (i === node)
        continue;
      if (computers[node][i] === 0)
        continue;
      if (check[i])
        continue;
      check[i] = true;
      queue.offer(i);
    }
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
    return (retValue);
  }
  isEmpty() {
    return this.size === 0;
  }
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
