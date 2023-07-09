function findOdd(A) {
    let itemCount = {};
    A.forEach((number) => {
      if (itemCount[number]) {
        itemCount[number] += 1;
      } else {
        itemCount[number] = 1;
      }
    })
    for (number in itemCount) {
        // in the next line, we use itemCount[number] to get the value of the number of times that appears in the array to check if that number of times is odd.
      if (itemCount[number] % 2 !== 0) {
        return Number(number);
      }
    }
    
  }

  console.log(findOdd([1, 1, 2]));
