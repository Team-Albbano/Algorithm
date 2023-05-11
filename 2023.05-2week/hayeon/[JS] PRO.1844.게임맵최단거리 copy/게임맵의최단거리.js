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
