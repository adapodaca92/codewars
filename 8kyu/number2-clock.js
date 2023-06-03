function past(h, m, s) {
  let milliseconds = 0;
  milliseconds += h * 3600000;
  console.log(milliseconds);
  milliseconds += m * 60000;
  console.log(milliseconds);
  milliseconds += s * 1000;
  console.log(milliseconds);
  return milliseconds;
}

console.log(past(0, 1, 1));
