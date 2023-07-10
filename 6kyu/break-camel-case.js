function solution(string) {
    let spacedArray = [];
    let strArray = string.split('');
    strArray.forEach((item) => {
      if (item === item.toUpperCase()) {
        spacedArray.push(' ');
        spacedArray.push(item);
      } else {
        if (item !== item.toUpperCase()) {
          spacedArray.push(item);
        }
      }
    })
    return spacedArray.join('');
  }

  console.log(solution('camelCasingIsAmazing'));