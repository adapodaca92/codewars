// function arrayDiff(a, b) {
//     let filteredArr = [];
//     let bString = b.join('');
//     a.forEach((item) => {
//         if (b.indexOf(item) === -1) {
//             filteredArr.push(item);
//         }
//     })
//     return filteredArr;
//   }

function arrayDiff(a, b) {
    return a.filter((item) => {
        return b.indexOf(item) === -1;
    })
}

console.log(arrayDiff([1, 2, 2], [2]));