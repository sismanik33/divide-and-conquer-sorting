var values = [7, 3, 3, 1, 4, 2, 9, 8];
document.getElementById("original-array-values").innerHTML = values;  
document.getElementById("sorted-array-values").innerHTML = values;  

function merge(array1, array2){
  let sortedArray = [];
  
  while (array1.length > 0 && array2.length > 0){
    if(array1[0] < array2[0]){
      sortedArray.push(array1[0]);
      array1.shift();
    } else {
      sortedArray.push(array2[0]);
      array2.shift();
    }
  }
  return sortedArray.concat(array1,array2);
}

function mergeSort(array) {
  if (array.length < 2){
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let leftArray = mergeSort(array.slice(0, middle));
  let rightArray = mergeSort(array.slice(middle));
  return merge(leftArray, rightArray);
}

console.log(mergeSort([7, 3, 3, 1, 4, 2, 9, 8]));
console.log(mergeSort([8, 6, 7, 5, 3, 0, 9, 13, 37, 73, 31, 86, 75, 30, 9, 9, 9, 867, 530, 99, 1337, 143, 313, 867, 5309, 8675309, 13337, 133337, 133, 337, 42, 42]));