const fixPositions = (arr) => {
  let temp = arr[arr.length - 1];
  arr[arr.length - 1] = arr[0];
  arr[0] = temp;
  return arr;
}

let testArr = ["tail", "body", "head"];
testArr = fixPositions(testArr);

console.log(testArr);