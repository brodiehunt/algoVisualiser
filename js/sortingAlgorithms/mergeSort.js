// function merge(left, right, arr) {
//   const copiedArr = arr.slice(0);
//   const newArr = arr;
//   let copyIndex = left.startIndex;
//   let rightCount = right.startIndex;
//   let leftCount = left.startIndex;
//   while ((leftCount <= left.endIndex) && (rightCount <= right.endIndex)) {
//     if (copiedArr[leftCount] < copiedArr[rightCount]) {
//       newArr[copyIndex] = copiedArr[leftCount];
//       mergeSortTransform(divsArray[copyIndex], copiedArr[leftCount]);
//       leftCount += 1;
//     } else {
//       newArr[copyIndex] = copiedArr[rightCount];
//       mergeSortTransform(divsArray[copyIndex], copiedArr[rightCount]);
//       rightCount += 1;
//     }
//     copyIndex += 1;
//   }

//   if (leftCount <= left.endIndex) {
//     for (let i = leftCount; i <= left.endIndex; i++) {
//       newArr[copyIndex] = copiedArr[i];
//       mergeSortTransform(divsArray[copyIndex], copiedArr[i]);
//       copyIndex += 1;
//     }
//   } else {
//     for (let i = rightCount; i <= right.endIndex; i++) {
//       newArr[copyIndex] = copiedArr[i]
//       mergeSortTransform(divsArray[copyIndex], copiedArr[i]);
//       copyIndex += 1;
//     }
//   }
//   return { arr: newArr, startIndex: left.startIndex, endIndex: right.endIndex };
// }

// function mergeSort(arrObj) {
//   const half = Math.ceil((arrObj.endIndex + arrObj.startIndex) / 2);

//   if (arrObj.startIndex === arrObj.endIndex) {
//     return { arr: arrObj.arr, startIndex: arrObj.startIndex, endIndex: arrObj.endIndex };
//   }
//   return merge(
//     mergeSort({ arr: arrObj.arr, startIndex: arrObj.startIndex, endIndex: (half - 1) }),
//     mergeSort({ arr: arrObj.arr, startIndex: half, endIndex: arrObj.endIndex }),
//     arrObj.arr,
//   );
// }
