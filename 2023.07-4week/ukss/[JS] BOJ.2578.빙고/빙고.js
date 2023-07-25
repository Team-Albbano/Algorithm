const input = require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((el) => el.split(' ').map(Number));

const bingo = input.slice(0, 5);
const target = input.slice(5, 10);
const visited = Array.from({ length: 5 }, () => Array(5).fill(0));

// 대각선
const isCross = (visited) => {
    let cnt = 0;
    // 왼쪽 대각선
    if (visited[0][0] && visited[1][1] && visited[2][2] && visited[3][3] && visited[4][4]) {
        cnt++;
    }
    // 오른쪽 대각선
    if (visited[0][4] && visited[1][3] && visited[2][2] && visited[3][1] && visited[4][0]) {
        cnt++;
    }
    return cnt;
};

// 가로, 세로
const isLine = (visited) => {
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
        // 가로
        if (visited[i][0] && visited[i][1] && visited[i][2] && visited[i][3] && visited[i][4]) {
            cnt++;
        }
        // 세로
        if (visited[0][i] && visited[1][i] && visited[2][i] && visited[3][i] && visited[4][i]) {
            cnt++;
        }
    }
    return cnt;
};

const solution = (bingo, target) => {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            const check = target[i][j];
            bingo.map((list, idx) => {
                if (list.includes(check)) {
                    visited[idx][list.indexOf(check)] = 1;
                }
            });

            let cross = isCross(visited);
            let line = isLine(visited);

            if (cross + line >= 3) {
                let answer = i * 5 + (j + 1);
                return answer;
            }
        }
    }
};

const answer = solution(bingo, target);
console.log(answer);
