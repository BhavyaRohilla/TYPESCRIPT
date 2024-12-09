function abc() {
  console.log(abc.xyz);
}
abc();
abc.xyz = 100;
abc.xyz = 200;
abc();

const number = [1, 2, 3, 4, 5];
number[100] = 500;
console.log(number);

console.log(typeof typeof 100);

const name = [..."bhavya"];

console.log(name);

console.log(parseInt("10+2"));
console.log(parseInt("7FM"));
console.log(parseInt("F7M"));
console.log(isNaN("Bhavya"));

console.log(
  [1, 2, 3].map((num) => {
    if (num > 0) return;
    return num * 2;
  })
);

function abc1() {
  return;
}
console.log(abc1());

{
  function abc2() {
    console.log("Bhavya");
  }
}

abc2();
