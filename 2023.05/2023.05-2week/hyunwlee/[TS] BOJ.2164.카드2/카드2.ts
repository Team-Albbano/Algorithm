import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input: Array<string> = [];
rl.on("line", function(line: string) {
  input.push(line);
}).on("close", function() {
  solution();
  process.exit();
});

function solution(): void {
  const n = +input[0];
  const queue = new LinkedList();
  for (let i = 1; i <= n; ++i)
    queue.offer(i);
  while (queue.size !== 1) {
    queue.poll();
    queue.offer(queue.poll().value);
  }
  console.log(queue.poll().value);
}

class Node {
  value: number = 0;
  next: Node | null = null;
  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  head: Node | null = null;
  tail: Node | null = null;
  size: number = 0;

  offer(item: number) {
    const newNode = new Node(item);
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
    const deletedNode = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.head = null;
      this.tail = null;
    }
    --this.size;
    return deletedNode;
  }

  isEmpty() {
    return this.size === 0;
  }
}