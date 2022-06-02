function insertionSort() {
  let i, x, temp;
  for (i=0; i < divsHeight.length; i++ ) {
    
    if (divsHeight[i] > divsHeight[i + 1]) {
      // transformColor(divsArray[i], divsArray[i+1], "green")
      temp = divsHeight[i];
      divsHeight[i] = divsHeight[i+1];
      divsHeight[i+1] = temp;
      transformDiv(divsArray[i], divsHeight[i], divsArray[i+1], divsHeight[i+1])
      // transformColor(divsArray[i], divsArray[i+1], "purple")
      for ( x = i; x > 0; x--) {
        if (divsHeight[x] < divsHeight[x-1]) {
          temp = divsHeight[x];
          divsHeight[x] = divsHeight[x-1];
          divsHeight[x-1] = temp;
          transformDiv(divsArray[x], divsHeight[x], divsArray[x-1], divsHeight[x-1])
        } else {
          break;
        }
      }
    }
  }
}

// const arrayTest = [12, 1, 19, 18, 17, 15, 3, 2, 7, 8, 5, 9, 10, 6, 16, 11, 4, 13, 14, 20]