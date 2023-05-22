const number = (array) => {
  let numberedStrings = [];
  array.forEach((string, i) => {
    numberedStrings[i] = `${i + 1}: ${string}`;
  });
  return numberedStrings;
};

console.log(number(['a', 'b', 'c']));
