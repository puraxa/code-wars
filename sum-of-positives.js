const positiveSum = (arr) => {
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i]>0){
      result += arr[i];
    }
  }
  return result;
}

let numbers = [1,10,24,-32,-45,7];

console.log(positiveSum(numbers));