function duplicateCount(text){
    let dupes = {};
    let count = 0;
    if (text.length === 0) {
        return 0;
    } else {
        
        let textToArr = text.toLowerCase().split('');
        textToArr.forEach((el) => {
            if (!dupes[el]) {
                dupes[el] = 1;
            } else {
                dupes[el] += 1;
            }
        })
    }
    for (item in dupes) {
        if (dupes[item] > 1 ){
          count++;
        }
      }
    
    console.log(dupes);
    console.log(count);
    return count;
  }

console.log(duplicateCount(''));