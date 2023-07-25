const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...sequence] = input;

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
        this.size = 0;
    }

    pushFront(item) {
        const newNode = new Node(item);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    pushBack(item) {
        const newNode = new Node(item);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
    }

    popFront() {
        if (this.size > 2) {
            const item = this.head.item;
            this.head.next.prev = null;
            this.head = this.head.next;
            this.size -= 1;
            return item;
        } else if (this.size === 2) {
            const item = this.head.item;
            this.head = this.head.next;
            this.tail.prev = null;
            this.size -= 1;
            return item;
        } else if (this.size === 1) {
            const item = this.head.item;
            this.head = null;
            this.tail = null;
            this.size -= 1;
            return item;
        } else {
            return -1;
        }
    }

    popBack() {
        if (this.size > 2) {
            const item = this.tail.item;
            this.tail.prev.next = null;
            this.tail = this.tail.prev;
            this.size -= 1;
            return item;
        } else if (this.size === 2) {
            const item = this.tail.item;
            this.tail = this.tail.prev;
            this.head.next = null;
            this.size -= 1;
            return item;
        } else if (this.size === 1) {
            const item = this.tail.item;
            this.head = null;
            this.tail = null;
            this.size -= 1;
            return item;
        } else {
            return -1;
        }
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.getSize() ? 0 : 1;
    }

    getFront() {
        return this.getSize() ? this.head.item : -1;
    }

    getBack() {
        return this.getSize() ? this.tail.item : -1;
    }
}

function solution(num, list) {
    const deque = new Queue();
    let ans = '';

    for (let i = 0; i < num; i++) {
        const [command, item] = list[i].split(' ');

        switch (command) {
            case 'push_front':
                deque.pushFront(item);
                break;

            case 'push_back':
                deque.pushBack(item);
                break;

            case 'pop_front':
                ans += deque.popFront() + ' ';
                break;

            case 'pop_back':
                ans += deque.popBack() + ' ';
                break;

            case 'size':
                ans += deque.getSize() + ' ';
                break;

            case 'empty':
                ans += deque.isEmpty() + ' ';
                break;

            case 'front':
                ans += deque.getFront() + ' ';
                break;

            case 'back':
                ans += deque.getBack() + ' ';
                break;
        }
    }

    return ans.split(' ').join('\n');
}

const answer = solution(n, sequence);
console.log(answer);
