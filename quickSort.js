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

console.log(quickSort([7, 3, 3, 1, 4, 2, 9, 8]));
console.log(quickSort([8, 6, 7, 5, 3, 0, 9, 13, 37, 73, 31, 86, 75, 30, 9, 9, 9, 867, 530, 99, 1337, 143, 313, 867, 5309, 8675309, 13337, 133337, 133, 337, 42, 42]));