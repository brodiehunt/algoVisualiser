function bubbleSort() {
  let i;
  let x;
  let swapped;
  for (i = 0; i < divsHeight.length - 1; i++) {
    swapped = false;
    for (x = 0; x < divsHeight.length - i - 1; x++) {
      if (divsHeight[x] > divsHeight[x + 1]) {
        const temp = divsHeight[x];
        divsHeight[x] = divsHeight[x + 1];
        divsHeight[x + 1] = temp;
        transformDiv(divsArray[x], divsHeight[x], divsArray[x + 1], divsHeight[x + 1]);
        swapped = true;
      }
    }
    if (swapped === false) {
      break;
    }
  }
}
