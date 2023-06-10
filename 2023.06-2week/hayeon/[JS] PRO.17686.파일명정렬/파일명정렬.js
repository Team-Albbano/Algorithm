function solution(files) {
  const HEAD_REGEX = /^\D+/;
  const NUMBER_REGEX = /\d+/;

  return files.sort((a, b) => {
    const aHead = a.match(HEAD_REGEX)[0].toLowerCase();
    const bHead = b.match(HEAD_REGEX)[0].toLowerCase();
    const aNum = a.match(NUMBER_REGEX)[0].replace(/^0+/, "");
    const bNum = b.match(NUMBER_REGEX)[0].replace(/^0+/, "");
    return aHead.localeCompare(bHead) || aNum - bNum;
  });
}
