const uniqueInOrder = (iterable) => {
    const iterArr = typeof iterable === 'string' ? iterable.split('') : iterable;
    return iterArr.filter((el, idx) => el !== iterArr[idx - 1]);
  }

console.log(uniqueInOrder([1, 1, 2, 2, 2, 3]));