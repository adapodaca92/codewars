// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let characters = {};
  let stringToArray = string.split('');
  console.log(stringToArray);
  stringToArray.forEach((letter) => {
    let charKey = letter;
    if (characters.hasOwnProperty(charKey)) {
      characters[charKey] += 1;
    } else {
      characters[charKey] = 1;
    }
  });
  return characters;
}

console.log(count('abbs'));
