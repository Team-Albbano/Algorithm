function solution(hp) {
  const general = parseInt(hp / 5);
  const solider = parseInt((hp - general * 5) / 3);
  const aesong_i = parseInt(hp - general * 5 - solider * 3);
  return general + solider + aesong_i;
}
