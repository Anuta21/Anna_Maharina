function filterArray(array) {
  array = array.filter((el) => typeof el !== "string");
  return array;
}

console.log("task 1:");
console.log(filterArray([1, "1", 222, "hddf", 345]));
console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, 2, "a", 5332, "b", 7218, "kshre"]));
