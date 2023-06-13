function getDivisorsCnt(n) {
  let divisors = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === n / i) {
        divisors++;
      } else {
        divisors += 2;
      }
    }
  }
  return divisors;
}

console.log(getDivisorsCnt(54));
