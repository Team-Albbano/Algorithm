function solution(num_list, n) {
  let result = [];

  for (let i = 0; i < num_list.length / n; i++) {
    result.push(num_list.slice(i * n, i * n + n));
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2));
