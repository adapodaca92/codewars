function isPangram(string) {
  //...
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let alphabetCount = 0;
  console.log(alphabet);
  let stringArray = string
    .toLowerCase()
    .split('')
    .filter((letter) => alphabet.includes(letter));
  console.log(stringArray);
  alphabet.forEach((letter) => {
    if (stringArray.includes(letter)) {
      alphabetCount += 1;
    }
  });
  return alphabetCount === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
