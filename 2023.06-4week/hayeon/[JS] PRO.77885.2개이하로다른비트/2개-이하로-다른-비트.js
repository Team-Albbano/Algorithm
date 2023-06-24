function solution(numbers) {
  return numbers.map((el) => {
    if (el % 2 === 0) {
      return el + 1;
    } else {
      const binaryNum = `0${el.toString(2)}`;

      for (let i = binaryNum.length; i >= 0; i--) {
        if (binaryNum[i] === "0") {
          const convertBit = `${binaryNum.slice(0, i)}10${binaryNum.slice(
            i + 2
          )}`;

          return parseInt(convertBit, 2);
        }
      }
    }
  });
}
