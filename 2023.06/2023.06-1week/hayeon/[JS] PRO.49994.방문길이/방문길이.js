function solution(dirs) {
  // 1. 최대, 최저 길이 설정
  const MAX_LENGTH = 5;
  const MIN_LENGTH = -MAX_LENGTH;

  // 2. 중복 제거 Set 사용
  const checkSet = new Set();

  // 3. 상하좌우 좌표 설정
  const moves = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  // 4. 현재 포지션 설정
  let curPosition = [0, 0];

  // 5. 유효성 검사
  const getIsValid = (x, y) => {
    if (x < MIN_LENGTH || y < MIN_LENGTH || x > MAX_LENGTH || y > MAX_LENGTH) {
      return false;
    }
    return true;
  };

  // 6. for문을 통해 dirs 돌기
  for (const dir of dirs) {
    const [dx, dy] = moves[dir];
    const [curX, curY] = curPosition;
    const [nx, ny] = [curX + dx, curY + dy];

    // 7. 범위가 유효하다면 실행할 것
    if (getIsValid(nx, ny)) {
      curPosition = [nx, ny];

      checkSet.add(`${curX}${curY}${nx}${ny}`);
      checkSet.add(`${nx}${ny}${curX}${curY}`);
    }
  }
  // 8. 2로 나누어서 반대방향으로 오고가는 경우를 하나로 합친다.
  return checkSet.size / 2;
}
