function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max];
}

console.log(minMax([1, 4, 22, 23, 15, 3, 98, 560]));
