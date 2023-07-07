function betterThanAverage(classPoints, yourPoints) {
  let avg = 0;
  let sum = 0;
  classPoints.forEach((score) => (sum += score));
  avg = sum / classPoints.length;
  if (yourPoints > avg) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([50, 65, 75], 85));
