const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const newNode = new Node(item);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    this.length++;
  }

  getHead() {
    return this.head.item;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  getSize() {
    return this.length;
  }
}

function solution(n) {
  const queue = new Queue();

  for (let i = 1; i <= n; i++) queue.push(i);

  while (queue.getSize() > 1) {
    queue.removeHead();
    queue.push(queue.getHead());
    queue.removeHead();
  }

  return queue.getHead();
}

const answer = solution(input);
console.log(answer);
