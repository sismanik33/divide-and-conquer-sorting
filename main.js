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

function quickSort(array){
    if (array.length < 2){
        return array;
    }
    let len = array.length;
    let pivotIndex = Math.floor(Math.random() * (len - 1));
    let pivotValue = array.splice(pivotIndex,1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < len - 1; i++) {    
        if(array[i] <= pivotValue){
            left.push(array[i]);
        } else{
            right.push(array[i]);
        }
    }
    return [...quickSort(left),pivotValue,...quickSort(right)];
}

let list1 = [7, 3, 3, 1, 4, 2, 9, 8];
let list2 = [8, 6, 7, 5, 3, 0, 9, 13, 37, 73, 31, 86, 75, 30, 9, 9, 9, 867, 530, 99, 1337, 143, 313, 867, 5309, 8675309, 13337, 133337, 133, 337, 42, 42];

listForMergeSort1 = list1.slice();
listForMergeSort2 = list2.slice();

listForQuickSort1 = list1.slice();
listForQuickSort2 = list2.slice();

mergeSort(listForMergeSort1);
mergeSort(listForMergeSort2);

quickSort(listForQuickSort1);
quickSort(listForQuickSort2);





