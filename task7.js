function intToIP(int) {
  let bin = int.toString(2);
  bin =
    Array(32 - bin.length)
      .fill("0")
      .join("") + bin;
  let ip = [];
  for (let i = 0; i < 4; i++) {
    ip.push(parseInt(bin.slice(i * 8, i * 8 + 8), 2));
  }
  return ip.join(".");
}

console.log("\n\ntask 7:");
console.log(intToIP(2149583361));
console.log(intToIP(32));
console.log(intToIP(0));
