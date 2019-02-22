let countPositivesSumNegatives = (arr) => {
  if(arr==null || arr.length < 1){
    return [];
  }
  let res = [0,0];
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]>0){
      res[0]++;
    }
    else {
      res[1] += arr[i];
    }
  }
  return res;
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

console.log(countPositivesSumNegatives(testData));