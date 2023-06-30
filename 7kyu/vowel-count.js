function getCount(str) {
  let sum = 0;
  let vowels = 'aeiou';
  let strArray = str.split('');
  strArray.forEach((letter) => {
    if (vowels.includes(letter)) {
      sum += 1;
    }
  });
  return sum;
}

console.log(getCount('abracadabra'));
