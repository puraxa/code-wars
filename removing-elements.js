const removeElements = (arr) => {
  let res = [];
  for(let i = 0; i < arr.length; i=i+2){
    res.push(arr[i]);
  }
  return res;
}

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
myArr = removeElements(myArr);
console.log(myArr);