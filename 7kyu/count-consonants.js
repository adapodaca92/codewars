function consonantCount(str) {
  // ...
  let consonants = 0;
  let vowels = 'aeiou';
  let cons = 'bcdfghjklmnpqrstvwxyz';
  str
    .toLowerCase()
    .split('')
    .forEach((letter) => {
      if (!vowels.includes(letter) && cons.includes(letter)) {
        consonants += 1;
      }
    });
  return consonants;
}

console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'));
