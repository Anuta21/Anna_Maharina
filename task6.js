function nextBiggerNum(num) {
  const arrayNum = [...num.toString()];
  for (
    let changableNum = num + 1;
    changableNum < 10 ** arrayNum.length;
    changableNum++
  ) {
    const arrayChNum = [...changableNum.toString()];
    for (let digit of arrayNum) {
      if (arrayChNum.includes(digit)) {
        let index = arrayChNum.indexOf(digit);
        arrayChNum.splice(index, 1);
      }
    }
    if (arrayChNum.length === 0) return changableNum;
  }
  return -1;
}

console.log("\n\ntask 6:");
console.log(nextBiggerNum(513));
console.log(nextBiggerNum(2017));
console.log(nextBiggerNum(111));
