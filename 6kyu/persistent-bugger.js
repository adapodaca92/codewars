function persistence(num) {
    let count = 0;
    let product = 1;
    let numToArray = num.toString().split('');
    numToArray.forEach((num, i) => {
        console.log(numToArray)
      product = num * numToArray[i + 1];
      count++;
      if (product.toString().split('').length === 1) {
        return count;
      } else {
        // numToArray = product.toString().split('');
        console.log(product);
        persistence(product);
      }
    })
  }

console.log(persistence(39));