const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution();
  process.exit();
});

let ans = [];
function solution(tickets) {
  const check = Array.from({length: tickets.length}, _ => false);
  dfs(0, tickets, 'ICN', 'ICN', check);
  ans = ans.sort((a, b) => {
    if (a < b)
      return -1;
    else if (a > b)
      return 1;
    return 0;
  });
  return ans[0].split(' ');
}

function dfs(depth, tickets, curr, route, check) {
  if (depth === tickets.length) {
    ans.push(route);
    return ;
  }
  tickets.forEach((ticket, index) => {
    const [from, to] = ticket;
    if (from === curr) {
      if (!check[index]) {
        check[index] = true;
        dfs(depth + 1, tickets, to, route + ' ' + to, check);
        check[index] = false;
      }
    }
  });
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]));
