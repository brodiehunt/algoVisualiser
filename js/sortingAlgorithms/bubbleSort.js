
function bubbleSort() {
  
  let i, x, swapped;
  
  for (i = 0; i < divsHeight.length -1; i++) {
    swapped = false;
    for (x = 0; x < divsHeight.length - i -1; x++) {
        // transformColor(divsArray[x], divsArray[x+1], 'blue')
      if (divsHeight[x] > divsHeight[x + 1]) {
        let temp = divsHeight[x];
        divsHeight[x] = divsHeight[x+1];
        divsHeight[x+1] = temp;
        transformDiv(divsArray[x], divsHeight[x], divsArray[x+1], divsHeight[x+1], 'green');
        // transformColor(divsArray[x], divsArray[x+1], 'green');
        
        swapped = true;
      }
      // transformColor(divsArray[x], null, 'white')
    }
    // finalPosition(divsArray[x], 'purple');
    if (swapped === false) {
      // window.setTimeout(() => {
      //   for (let y = 0; y < x; y++) {
      //     divsArray[y].style.backgroundColor = 'purple';
      //   }
      // }, time += timeDelay)
      break;
    }
  }

  
}




