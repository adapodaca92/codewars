// write the function isAnagram
const isAnagram = function(test, original){
    const sortedTest = test.toLowerCase().split('').sort().join('');
    const sortedOriginal = original.toLowerCase().split('').sort().join('');
    return sortedTest === sortedOriginal;
  };
  
  console.log(isAnagram("Buckethead", "DeathCubeK"));
