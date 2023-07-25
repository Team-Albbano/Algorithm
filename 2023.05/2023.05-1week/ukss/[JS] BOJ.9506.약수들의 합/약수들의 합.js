const list = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .filter((el) => el > 2);

for (let i = 0; i < list.length; i++) {
  let yaksu = [];
  let input = list[i];

  for (let j = 1; j < input; j++) {
    if (input % j === 0) {
      yaksu.push(j);
    }
  }

  let result = yaksu.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);

  input === result ? console.log(input + ' = ' + yaksu.join(' + ')) : console.log(input + ' is NOT perfect.');
}
