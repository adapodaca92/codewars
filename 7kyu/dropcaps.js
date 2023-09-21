function dropCap(n) {
    let words = n.split(' ');
    return words.map((word) => {
        if (word.length > 2) {
            return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    }).join(' ')
}

  console.log(dropCap('Revelation of the contents outraged American public opinion, and helped generate'));