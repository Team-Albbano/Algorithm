function solution(maps) {
  const HEIGHT = maps.length;
  const WIDTH = maps[0].length;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let result = -1;

  const getIsVaild = (y, x) => {
    if (x >= 0 && y >= 0 && x < WIDTH && y < HEIGHT && maps[y][x] === 1)
      return true;
  };

  const bfs = (start, end) => {
    const queue = [[start, end, 1]];

    while (queue.length) {
      const [curY, curX, curCount] = queue.shift();

      if (curY === HEIGHT - 1 && curX === WIDTH - 1) {
        result = curCount;
        return;
      }

      moves.forEach((move) => {
        const [dy, dx] = move;
        const [ny, nx] = [curY + dy, curX + dx];

        if (getIsVaild(ny, nx)) {
          queue.push([ny, nx, curCount + 1]);
          maps[ny][nx] = 0;
        }
      });
    }
  };

  bfs(0, 0);

  return result;
}

/*
처음 풀이
function solution(maps) {
  const queue = [];
  const n = maps.length;
  const m = maps[0].length;
  const moveX = [-1, 1, 0, 0];
  const moveY = [0, 0, -1, 1];

  queue.push([0, 0, 1]);

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (curY === n - 1 && curX === m - 1) return move;

    for (let i = 0; i < 4; i++) {
      const movedX = curX + moveX[i];
      const movedY = curY + moveY[i];

      if (
        movedX >= 0 &&
        movedX < m &&
        movedY >= 0 &&
        movedY < n &&
        maps[movedY][movedX] === 1
      ) {
        queue.push([movedY, movedX, move + 1]);
        maps[movedY][movedX] = 0;
      }
    }
  }

  return -1;
}
*/
