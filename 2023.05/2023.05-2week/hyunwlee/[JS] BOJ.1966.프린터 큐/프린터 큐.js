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
  offer(item) {
    const tailNode = new Node(item);
    if (!this.head) {
      this.head = tailNode;
      this.tail = tailNode;
    } else {
      this.tail.next = tailNode;
      this.tail = tailNode;
    }
    ++this.size;
  }
  poll() {
    const headNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.head = null;
      this.tail = null;
    }
    --this.size;
    return headNode;
  }
  isEmpty() {
    return this.size === 0;
  }
}

function solution() {
  const t = +input[0];
  for (let i = 0; i < t; ++i) {
    let [n, m] = input[2 * i + 1].split(" ").map(Number);
    const queue = new LinkedList();
    input[2 * i + 2].split(" ").forEach((item) => {
      queue.offer(item);
    });
    const sortedArray = input[2 * i + 2].split(" ").sort((a, b) => b - a);
    let sortedArrayIndex = 0;
    let ans = 1;
    while (!queue.isEmpty() && sortedArrayIndex < sortedArray.length) {
      const polledNode = queue.poll();
      if (polledNode.value === sortedArray[sortedArrayIndex]) {
        if (m === 0) {
          console.log(ans);
          break;
        }
        ++sortedArrayIndex;
        ++ans;
      } else {
        queue.offer(polledNode.value);
      }
      if (m === 0) m = queue.size - 1;
      else --m;
    }
  }
}
