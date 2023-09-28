function isValidWalk(walk) {
    //insert brilliant code here
    let directions = {};
    let isValid = false;
    if (walk.length !== 10) {
      return isValid;
    } else {
      walk.forEach((direction) => {
        if (directions[direction]) {
          directions[direction] += 1;
        } else if (!directions[direction]) {
          directions[direction] = 1;
        } 
      })
      for (direction in directions) {
        if (directions['n'] === directions['s'] && directions['w'] === directions['e']) {
          isValid = true;
        }
      }
    }
    return isValid;
  }

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));