const numberedArray = (array) => {
  let numberedStrings = [];
  array.forEach((string, i) => {
    numberedStrings[i] = `${i + 1}: ${string}`;
  });
  return numberedStrings;
};

console.log(numberedArray['a', 'b', 'c']));
