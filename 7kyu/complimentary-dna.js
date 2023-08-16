function DNAStrand(dna){
    let dnaOtherSide = [];
    let dnaFirstSide = dna.split('');
    dnaFirstSide.forEach((letter) => {
      if (letter === 'A') dnaOtherSide.push('T');
      if (letter === 'T') dnaOtherSide.push('A');
      if (letter === 'C') dnaOtherSide.push('G');
      if (letter === 'G') dnaOtherSide.push('C');
    })
    return dnaOtherSide.join('');
  }

  console.log(DNAStrand('AATCG'));