function tailSwap(arr) {
    let firstStringBegin = arr[0].slice(0, arr[0].indexOf(':'));
    let secondStringBegin = arr[1].slice(0, arr[1].indexOf(':'));
    let firstStringEnd = arr[0].slice(arr[0].indexOf(':'));
    let secondStringEnd = arr[1].slice(arr[1].indexOf(':'));
    let newArr = [`${firstStringBegin}${secondStringEnd}`, `${secondStringBegin}${firstStringEnd}`];
    return newArr;
  }

  console.log(tailSwap(['a:12345', '777:xyz']));