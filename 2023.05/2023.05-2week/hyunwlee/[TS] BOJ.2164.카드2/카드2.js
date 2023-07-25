"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var input = [];
rl.on("line", function (line) {
    input.push(line);
}).on("close", function () {
    solution();
    process.exit();
});
function solution() {
    var n = +input[0];
    var queue = new LinkedList();
    for (var i = 1; i <= n; ++i)
        queue.offer(i);
    while (queue.size !== 1) {
        queue.poll();
        queue.offer(queue.poll().value);
    }
    console.log(queue.poll().value);
}
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = 0;
        this.next = null;
        this.value = value;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.offer = function (item) {
        var newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        ++this.size;
    };
    LinkedList.prototype.poll = function () {
        var deletedNode = this.head;
        this.head = this.head.next;
        if (!this.head) {
            this.head = null;
            this.tail = null;
        }
        --this.size;
        return deletedNode;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size === 0;
    };
    return LinkedList;
}());
