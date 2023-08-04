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

const mapping = (lines, map) => {
  const [from, to] = lines.split(' ').map(Number);
  map.set(from, to);
}

function solution() {
  const [nm, ...arr] = input;
  const [n, _] = nm.split(' ').map(Number);
  const ladders = new Map();
  const snakes = new Map();
  arr.splice(0, n).forEach(lines => mapping(lines, ladders));
  arr.forEach(lines => mapping(lines, snakes));
  // console.log(ladders);
  // console.log(snakes);
  console.log(bfs(ladders, snakes));
}

function bfs(ladders, snakes) {
  const queue = new LinkedList();
  queue.offer(1);
  const dist = Array.from({length: 101}, _ => 0);
  // const route = Array.from({length: 101}, _ => _);
  // route[1] = '1';
  while (!queue.isEmpty()) {
    const now = queue.poll(); 
    for (let i = 1; i <= 6; ++i) {
      let next = now + i;
      if (next > 100)
        continue;
      if (ladders.has(next)) {
        next = ladders.get(next);
        if (dist[next] !== 0)
          continue;
        dist[next] = dist[now] + 1;
        // route[next] = route[now] + ` ${next}`;
        queue.offer(next);
      }
      else if (snakes.has(next)) {
        next = snakes.get(next);
        if (dist[next] !== 0)
          continue;
        dist[next] = dist[now] + 1;
        // route[next] = route[now] + ` ${next}`;
        queue.offer(next);
      }
      else {
        if (dist[next] === 0) {
          dist[next] = dist[now] + 1;
          // route[next] = route[now] + ` ${next}`;
          queue.offer(next);
        }
      }
    }
  }
  // console.log(route[100]);
  return dist[100];
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

