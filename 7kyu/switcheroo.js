// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x) {
  let stringToArray = x.split('');
  stringToArray.forEach((letter, i) => {
    if (letter === 'a') {
      stringToArray[i] = 'b';
    } else if (letter === 'b') {
      stringToArray[i] = 'a';
    } else {
      stringToArray[i] = 'c';
    }
  });
  return stringToArray.join('');
}

switcheroo('abbac');
