function arrayDiff(a, b) {
    let filteredArr = [];
    let bString = b.join('');
    a.forEach((item) => {
        if (b.indexOf(item) === -1) {
            filteredArr.push(item);
        }
    })
    return filteredArr;
  }

console.log(arrayDiff([1, 2, 2], [2]));