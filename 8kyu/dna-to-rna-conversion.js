function DNAtoRNA(dna) {
  let dnaArray = dna.split('');
  dnaArray.forEach((letter, i) => {
    if (letter === 'T') {
      dnaArray[i] = 'U';
    }
  });
  return dnaArray.join('');
}

console.log(DNAtoRNA('TTTT'));
