function recursiveSum(num) {
  let sum = 0;
  for (let digit of num.toString()) {
    sum += Number(digit);
  }
  return sum < 10 ? sum : recursiveSum(sum);
}

console.log("\n\ntask 3:");
console.log(recursiveSum(16));
console.log(recursiveSum(942));
console.log(recursiveSum(132189));
