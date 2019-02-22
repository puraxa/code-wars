const arrayPlusArray = (arr1,arr2) => {
  let sum = 0;
  arr1 = arr1.concat(arr2);
  for(let i = 0; i < arr1.length; i++){
    sum+=arr1[i];
  }
  return sum;
}

let num1 = [1,2,3,4];
let num2 = [10,11,12,13,14,15,-59];

console.log(arrayPlusArray(num1,num2));