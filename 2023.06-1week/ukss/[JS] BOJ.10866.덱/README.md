<!-- 제목으로 다음과 같은 내용으로 작성해주세요 ! -->
<!-- 📚 언어 : e.g. Javascript -> [JS], Python -> [Python]  -->
<!-- 📕 백준 : BOJ 문제번호/문제제목 e.g. BOJ 2577/숫자의 개수 -->
<!-- 📗 프로그래머스 : PRO 문제번호/문제제목 e.g. PRO 120812/최빈값 구하기 -->
<!-- 💁🏻 백준허브를 사용하시면 프로그래머스의 문제번호도 확인하실 수 있습니다 -->

# [JS] BOJ 10866/덱

<!-- 아래에 # 을 지우고 문제 링크를 입력해주세요 ! -->

[문제 링크](https://www.acmicpc.net/problem/10866)

## Table of Contents

-   [✍🏻 풀이](#풀이)
-   [⏰ 소요시간](#소요시간)
-   [🫠 어려웠던 점](#어려웠던-점)
-   [😮 배운 점](#배운-점)
-   [🤔 궁금한 점](#궁금한-점)

## 풀이

<!-- ```옆에 사용하는 언어를 기입하세요 e.g. javascript, python -->

Queue 를 만들어 푼 문제였다.

Queue를 구현하는 것이 어렵지 명령을 수행하는 코드를 만드는 자체는 어렵지 않았다. 앞, 뒤로 넣는 코드, 앞, 뒤를 빼는 코드, size, empty 여부, front, back 출력을 구현하면 되는 문제.

switch 문을 통해서 입력값에 따른 명령을 수행할 수 있도록 설계하였다.

```javascript
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
```

## 소요시간

1시간

## 어려웠던 점

## 배운 점

## 궁금한 점
