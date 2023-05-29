function solution(n) {
  const answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n = n / i;
      answer.push(i);
    }
  }
  // new Set 은 오브젝트여서 그 오브젝트를 풀여주려고 [...] 사용
  return [...new Set(answer)];
}
