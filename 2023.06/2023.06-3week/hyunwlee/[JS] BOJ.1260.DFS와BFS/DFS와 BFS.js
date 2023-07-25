const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];

rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  solution();
  process.exit();
});

function solution() {
  const [nmv, ...arr] = input;
  const [n, m, v] = nmv.split(' ').map(Number);
  const list = Array.from(Array(n + 1), _ => []);
  arr.forEach(line => {
    const [from, to] = line.split(' ').map(Number);
    list[from].push(to);
    list[to].push(from);
  });
  list.map(line => line.sort((a, b) => (a - b)));
  let check = Array.from({length: n + 1}, _ => false);
  DFS(0, list, check, v, `${v}`);
  check = Array.from({lenght: n + 1}, _ => false);
  console.log();
  BFS(list, check, v);
}

function DFS(depth, list, check, v, cur) {
  if (check[v]) 
    return ;
  check[v] = true;
  process.stdout.write(v + ' ');
  list[v].forEach(n => {
    if (!check[n])
      DFS(depth + 1, list, check, n, cur + ' ' + n);
  });
}

function BFS(list, check, v) {
  let ans = `${v} `;
  const queue = new LinkedList();
  queue.offer(v);
  check[v] = true;
  while (!queue.isEmpty()) {
    const node = queue.poll();
    list[node].forEach(n => {
      if (!check[n]) {
        check[n] = true;
        ans += n + ' ';
        queue.offer(n);
      }
    });
  }
  console.log(ans);
}

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
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
