function solution(n) {
  let answer = [];
  // 약수는 나누어 떨어지는 수를 찾는것.
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}
