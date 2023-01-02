function firstNonRepeatingLetter(word) {
  function letterNum(letter) {
    let counter = 0;
    for (let l of word) {
      if (l === letter.toUpperCase() || l === letter.toLowerCase()) counter++;
    }
    return counter;
  }

  for (let letter of word) {
    if (letterNum(letter) === 1)
      return word.includes(letter.toUpperCase())
        ? letter.toUpperCase()
        : letter.toLowerCase();
  }
  return "";
}

console.log("\n\ntask 2:");
console.log(firstNonRepeatingLetter("sTress"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("teta"));
