function insertionSort() {
  let i;
  let x;
  let temp;
  for (i = 0; i < divsHeight.length; i++ ) {
    if (divsHeight[i] > divsHeight[i + 1]) {
      temp = divsHeight[i];
      divsHeight[i] = divsHeight[i + 1];
      divsHeight[i + 1] = temp;
      transformDiv(divsArray[i], divsHeight[i], divsArray[i + 1], divsHeight[i + 1]);
      for ( x = i; x > 0; x--) {
        if (divsHeight[x] < divsHeight[x - 1]) {
          temp = divsHeight[x];
          divsHeight[x] = divsHeight[x - 1];
          divsHeight[x - 1] = temp;
          transformDiv(divsArray[x], divsHeight[x], divsArray[x - 1], divsHeight[x - 1]);
        } else {
          break;
        }
      }
    }
  }
}
