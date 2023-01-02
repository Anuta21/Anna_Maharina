function meeting(s) {
  const array = s.split(";").map((el) => el.split(":"));
  let lastFirstNameArray = array.map(
    (el) => `${el[1].toUpperCase()}.${el[0].toUpperCase()}`
  );
  lastFirstNameArray = lastFirstNameArray.sort();
  lastFirstNameArray = lastFirstNameArray.map((el) => el.split("."));
  let str = "";
  lastFirstNameArray.forEach((el) => (str = str + `(${el[0]}, ${el[1]})`));
  return str;
}

console.log("\n\ntask 5:");
console.log(meeting("a:b;c:b;a:b;c:d;e:f"));
console.log(
  meeting(
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
  )
);
