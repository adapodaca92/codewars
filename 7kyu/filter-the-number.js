var filterString = function(value) {
    let valueArray = value.split('');
    numbers = [];
    valueArray.forEach((el) => {
        if (!isNaN(Number(el))) numbers.push(Number(el)); 
    })
    return Number(numbers.join(''));
  }

console.log(filterString("a1b2c3"));

