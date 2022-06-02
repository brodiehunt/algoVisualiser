function merge(left, right, arr) {
  
  let copiedArr = arr.slice(0);
  let copyIndex = left.startIndex;
  let rightCount = right.startIndex;
  let leftCount = left.startIndex;
  
  while ((leftCount <= left.endIndex) && (rightCount <= right.endIndex)) {
    if (copiedArr[leftCount] < copiedArr[rightCount]) {
      arr[copyIndex] = copiedArr[leftCount];
      mergeSortTransform(divsArray[copyIndex], copiedArr[leftCount])
      leftCount ++ 
    } else {
      arr[copyIndex] = copiedArr[rightCount];
      mergeSortTransform(divsArray[copyIndex], copiedArr[rightCount])
      rightCount++
    }
    copyIndex++
  }

  if (leftCount <= left.endIndex) {
    for ( let i = leftCount; i <= left.endIndex; i++) {
      arr[copyIndex] = copiedArr[i]
      mergeSortTransform(divsArray[copyIndex], copiedArr[i])
      copyIndex++
    }
  } else {
    for( let i = rightCount; i <= right.endIndex; i++) {
      arr[copyIndex] = copiedArr[i]
      mergeSortTransform(divsArray[copyIndex], copiedArr[i])
      copyIndex++
    }
  }
  return {arr: arr, startIndex: left.startIndex, endIndex: right.endIndex};
}

function mergeSort(arrObj) {
  const half = Math.ceil((arrObj.endIndex + arrObj.startIndex)/2)

  if (arrObj.startIndex === arrObj.endIndex) {
    return {arr: arrObj.arr, startIndex: arrObj.startIndex, endIndex: arrObj.endIndex};
  }
  
  return merge(mergeSort({arr: arrObj.arr, startIndex: arrObj.startIndex, endIndex: (half -1)}), mergeSort({arr: arrObj.arr, startIndex: half, endIndex: arrObj.endIndex}), arrObj.arr)
}