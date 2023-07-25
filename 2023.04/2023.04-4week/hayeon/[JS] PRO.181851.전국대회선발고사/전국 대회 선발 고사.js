function solution(rank, attendance) {
  const rankArray = rank
    .map((el, i) => [el, i])
    .filter((el, i) => attendance[i] === true)
    .sort((a, b) => a[0] - b[0]);

  return 10000 * rankArray[0][1] + 100 * rankArray[1][1] + rankArray[2][1];
}
