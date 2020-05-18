function getMinMax(arr){
  
function compare (a, b) {
  return a - b;
}

let result = [];
arr.sort(compare);
result.push(arr[0], arr[arr.length - 1]);
return result;

};

getMinMax([5,3,6,1,3,4,123,23]);