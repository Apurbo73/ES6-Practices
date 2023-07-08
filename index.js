var number = [1, 2, 3, -1,50, 5, 6, 7, 8, 9];
var result = number.findIndex((currentValue, index, arr) => {
  return currentValue > 3;
});
console.log(`A number that is greater than 3 is found in index ${result} at first`);
