function calcPairsSumEqualTo(array, num) {
  let pairsNum = 0;
  function calcPairsNum(array) {
    for (let i = 1; i < array.length; i++) {
      if (array[0] + array[i] === num) pairsNum++;
    }
    array.splice(0, 1);
    return array.length < 2 ? pairsNum : calcPairsNum(array);
  }
  return calcPairsNum(array);
}

console.log("\n\ntask 4:");
console.log(calcPairsSumEqualTo([1, 2, 3, 0, 0, 2], 3));
console.log(calcPairsSumEqualTo([1, 3, 6, 2, 0, 2, 4, 5], 5));
