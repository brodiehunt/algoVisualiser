function quickSort(array, start, end) {
  let pivotValue =  array[end];
  let pivotIndex = start;
  console.log(start, end)
  for ( let i = start; i < end; i++) {
    
    if (array[i] < pivotValue) {
      let temp = array[i];
      array[i] = array[pivotIndex];
      array[pivotIndex] = temp;
      transformDiv(divsArray[i], array[i], divsArray[pivotIndex], array[pivotIndex])
      pivotIndex+=1
      
      
    }
  }
  let pivotTemp = array[pivotIndex];
  array[pivotIndex] = array[end];
  array[end] = pivotTemp;
  transformDiv(divsArray[pivotIndex], array[pivotIndex], divsArray[end], array[end])
  if ((pivotIndex - start > 0) && (end - pivotIndex > 0)) {
    
    quickSort(array, start, pivotIndex -1);
    quickSort(array, pivotIndex +1, end)
  } else if (pivotIndex - start > 0) {
    
    quickSort(array, start, pivotIndex -1)
  } else if (end - pivotIndex > 1) {
    
    quickSort(array, pivotIndex + 1, end)
  }
 
}

function quickSortTest(array) {
  console.log(array)
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length -1];
  let rightArr = [];
  let leftArr = [];
  for (let i = 0; i < array.length -1; i++) {
    if (pivot > array[i]) {
      leftArr.push(array[i])
    } else {
      rightArr.push(array[i])
    }
  }

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot]
  } else {
    return [pivot, ...quickSort(rightArr)]
  }

}

// const arrayTest = [12, 1, 19, 18, 17, 15, 3, 2, 7, 8, 5, 9, 10, 6, 16, 11, 4, 13, 14, 20]