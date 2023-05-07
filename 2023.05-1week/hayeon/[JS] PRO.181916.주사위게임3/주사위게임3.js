function solution(a, b, c, d) {
  if (a === b && b === c && c === d) return 1111 * a;
  const arr = [a, b, c, d].sort();
  const isValidCaseTwo =
    arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[3];
  const isValidCaseThree =
    arr[0] === arr[1] && arr[1] !== arr[2] && arr[2] === arr[3];
  let sameCount = 0;
  let sameNumber = 0;
  if (isValidCaseTwo) return arr[0];
  if (isValidCaseThree) return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      sameCount++;
      sameNumber = arr[i];
    }
  }

  const diffNumber = arr.filter((el) => el !== sameNumber);
  if (sameCount === 1) return diffNumber[0] * diffNumber[1];
  return (10 * sameNumber + diffNumber[0]) ** 2;
}

// 수정 전
/*
function solution(a, b, c, d) {
  if(a === b && b === c && c === d) return 1111 * a;

  const arr = [a, b, c, d].sort();

  if(arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[3]) return arr[0];

  if(arr[0] === arr[1] && arr[1] !== arr[2] && arr[2] === arr[3]) return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);

  let sameCount = 0;
  let sameNumber = 0;

  for(let i = 0; i < arr.length; i++){
      if(arr[i] === arr[i+1]){
          sameCount++;
          sameNumber = arr[i];
      }
  }

  const diffNumber = arr.filter((el)=> el !== sameNumber);

  if(sameCount === 1) return diffNumber[0] * diffNumber[1];
  else return (10 * sameNumber + diffNumber[0]) ** 2;
}
*/
