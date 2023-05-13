const [n, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = n.split(' ').map(Number);
const whiteBoard = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
const blackBoard = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];

let modify = [];

function checkBoard(x, y) {
  let whiteCheck = 0;
  let blackCheck = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      board[i][j] !== whiteBoard[i - y][j - x] && whiteCheck++;
      board[i][j] !== blackBoard[i - y][j - x] && blackCheck++;
    }
  }

  return whiteCheck < blackCheck ? whiteCheck : blackCheck;
}

for (let i = 0; i + 7 < M; i++) {
  for (let j = 0; j + 7 < N; j++) {
    modify.push(checkBoard(i, j));
  }
}

console.log(Math.min(...modify));
