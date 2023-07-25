function solution(bridge_length, weight, truck_weights) {
  const truckQueue = new LinkedList();
  const bridgeQueue = new LinkedList();
  truck_weights.forEach(truck => {
    truckQueue.offer({weight: truck, pos: 0});
  })
  const firstTruck = truckQueue.poll();
  bridgeQueue.offer({weight: firstTruck.weight, pos: 1});
  let time = 0;
  let bridgeWeight = firstTruck.weight;
  while (!bridgeQueue.isEmpty() || !truckQueue.isEmpty()) {
    if (!bridgeQueue.isEmpty() && (bridgeQueue.peek().pos > bridge_length)) {
      const polledBridgeTruck = bridgeQueue.poll();
      bridgeWeight -= polledBridgeTruck.weight;
    }
    if (!truckQueue.isEmpty() && (truckQueue.peek().weight + bridgeWeight <= weight)) {
      const polledTruck = truckQueue.poll();
      bridgeWeight += polledTruck.weight;
      bridgeQueue.offer({weight: polledTruck.weight, pos: 1});
    }
    for (let i = 0; i < bridgeQueue.size; ++i) {
      const polledNode = bridgeQueue.poll();
      bridgeQueue.offer({weight: polledNode.weight, pos: polledNode.pos + 1});
    }
    ++time;
  }
  return time;
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
  peek() {
    return this.head.value;
  }
  isEmpty() {
    return this.size === 0;
  }
}

console.log(solution(2, 10, [7, 4, 5, 6]) === 8);
console.log(solution(100, 100, [10]) === 101);
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) === 110);
