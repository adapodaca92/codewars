function findNextSquare(sq) {
    const squareRoot = Math.sqrt(sq);
    if (sq % squareRoot === 0) {
      sq++;
      while (sq % Math.sqrt(sq) !== 0) {
        sq++;
      }
      return sq;
    } 
    return -1;
  }


console.log(findNextSquare(121));