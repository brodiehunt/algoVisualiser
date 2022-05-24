function bubbleSort(array) {
  let i, x, temp, swapped;

  for (i = 0; i < array.length - 1; i++) {
    swapped=false; 
    for (x = 0; x < array.length-1 -i; x++) {
      if (array[x] > array[x+1]) {
        temp = array[x];
        array[x] = array[x+1];
        array[x+1] = temp;
        swapped=true
      }

    }
    if (swapped === false) {
      break;
    }
  }
  return array;
}




console.log(bubbleSort([2,4,1,5,6,4,2,1,4,5]));