var filterString = function(value) {
    let valueArray = value.split('');
    numbers = [];
    console.log(valueArray);
    valueArray.forEach((el) => {
        if (!isNaN(Number(el))) numbers.push(Number(el)); 
    })
    console.log(numbers)
    return Number(numbers.join(''));
  }

console.log(filterString("a1b2c3"));

