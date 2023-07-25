function solution(numbers) {
  const sortNumbers = numbers.map(String).sort((a, b) => b + a - (a + b));

  return sortNumbers[0] === "0" ? "0" : sortNumbers.join("");
}
