String.prototype.toJadenCase = function () {
  //...
  let quoteArray = this.split(' ');
  console.log(quoteArray);
  for (let i = 0; i < quoteArray.length; i++) {
    quoteArray[i] =
      quoteArray[i].charAt(0).toUpperCase() + quoteArray[i].slice(1);
  }
  console.log(quoteArray);
  quoteArray = quoteArray.join(' ');
  return quoteArray;
};

let newQuote = "How can mirrors be real if our eyes aren't real";

console.log(newQuote.toJadenCase());
