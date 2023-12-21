function remove(str) { 
    return str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, ''); 
} 

const palindromes = function (input) {
  if (input.length === 0) {
    return false;
  }
  if (input.length === 1) {
    return true;
  }
  const noPunctuation = remove(input.toLowerCase());
  const noSpaceWord = noPunctuation.split("");
  let left = 0;
  let right = noSpaceWord.length - 1;

  let keepGoing = true;

  while (keepGoing) {
    if (left >= right) {
      keepGoing = false;
      break;
    }
    if (noSpaceWord[left] === " ") {
      left++;
      continue;
    }
    if (noSpaceWord[right] === " ") {
      right--;
      continue;
    }

    if (noSpaceWord[left] != noSpaceWord[right]) {
        //console.log(noSpaceWord[left]);
        //console.log(noSpaceWord[right]);
      return false;
    }

    left++;
    right--;
  }
  return true;

  //TODO, finish rest of testing units
};

// Do not edit below this line
module.exports = palindromes;
