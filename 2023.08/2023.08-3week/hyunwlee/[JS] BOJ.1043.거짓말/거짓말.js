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

let parent = null;

function solution() {
  const [nm, kp, ...parties] = input;
  const [n, m] = nm.split(' ').map(Number);
  const [_, ...knownPeople] = kp.split(' ').map(Number);
  parent = Array.from({length: n + 1}, (_, idx) => idx);
  parties.forEach(party => {
    const [_, ...partyPeople] = party.split(' ').map(Number);
    for (let i = 0; i < partyPeople.length - 1; ++i) {
      union(partyPeople[i], partyPeople[i + 1]);
    }
  })
  for (let i = 1; i < parent.length; ++i)
    find(i);
  let ans = 0;
  parties.forEach(party => {
    const [_, ...partyPeople] = party.split(' ').map(Number);
    let isThereKnown = false;
    for (let i = 0; i < knownPeople.length; ++i) {
      for (let j = 0; j < partyPeople.length; ++j) {
        if (parent[knownPeople[i]] === parent[partyPeople[j]]) {
          isThereKnown = true;
          break;
        }
      }
      if (isThereKnown)
        break;
    }
    if (!isThereKnown)
      ++ans;
  })
  console.log(ans);
}

function union(first, second) {
  first = find(first);
  second = find(second);
  if (first < second) {
    parent[second] = first;
  } else if (first > second) {
    parent[first] = second;
  }
}


function find(num) {
  if (parent[num] === num)
    return num;
  return parent[num] = find(parent[num]);
}
