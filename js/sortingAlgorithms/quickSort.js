// function quickSort(array, start, end) {
//   const pivotValue = array[end];
//   const newArray = array;
//   let pivotIndex = start;
//   for (let i = start; i < end; i++) {
//     if (newArray[i] < pivotValue) {
//       const temp = newArray[i];
//       newArray[i] = newArray[pivotIndex];
//       newArray[pivotIndex] = temp;
//       transformDiv(divsArray[i], newArray[i], divsArray[pivotIndex], newArray[pivotIndex]);
//       pivotIndex += 1;
//     }
//   }
//   const pivotTemp = newArray[pivotIndex];
//   newArray[pivotIndex] = array[end];
//   newArray[end] = pivotTemp;
//   transformDiv(divsArray[pivotIndex], array[pivotIndex], divsArray[end], array[end]);
//   if ((pivotIndex - start > 0) && (end - pivotIndex > 0)) {
//     quickSort(array, start, pivotIndex - 1);
//     quickSort(array, pivotIndex + 1, end);
//   } else if (pivotIndex - start > 0) {
//     quickSort(array, start, pivotIndex - 1);
//   } else if (end - pivotIndex > 1) {
//     quickSort(array, pivotIndex + 1, end);
//   }
// }
