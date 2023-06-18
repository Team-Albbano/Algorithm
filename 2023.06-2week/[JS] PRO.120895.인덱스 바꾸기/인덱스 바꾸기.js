function solution(my_string, num1, num2) {
  const copy = [...my_string];
  [copy[num1], copy[num2]] = [copy[num2], copy[num1]];
  return copy.join("");
}
