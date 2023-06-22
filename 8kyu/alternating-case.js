// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
// Define String.prototype.toAlternatingCase (or a similar function/method such as
// to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the
// initial solution for details) such that each lowercase letter becomes uppercase and each
// uppercase letter becomes lowercase.

let name = 'AnthonY';

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  let letters = this.split('');
  letters.forEach((letter, i) => {
    if (letter === letter.toUpperCase()) {
      letters[i] = letter.toLowerCase();
    } else if (letter === letter.toLowerCase()) {
      letters[i] = letter.toUpperCase();
    }
  });
  return letters.join('');
};

console.log(name.toAlternatingCase());
