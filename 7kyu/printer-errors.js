const printerError = (s) => {
    let validLetters = 'abcdefghijklm';
    let invalidCount = 0;
    s.split('').forEach((letter) => {
        if (!validLetters.includes(letter)) {
            invalidCount++
        }
    });
    return `${invalidCount}/${s.length}`;

}


console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));