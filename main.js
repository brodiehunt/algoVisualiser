// select elements
const algorithmSelect = document.getElementById('select_algorithm');
const barsSelect = document.getElementById('select_bars');
const speedSelect = document.getElementById('select_speed');

// btn elements 
const pathFindingVisualerBtn = document.getElementById('path_finding_btn');
const startAlgorithmBtn = document.getElementById('start_algorithm_btn');
const generateArrayBtn = document.getElementById('generate_array_btn');
// algorithm container 
const algorithmContainerEl = document.getElementById('visualiser')

let arraySize = parseInt(barsSelect.value),
    time = 0,
    timeDelay,
    divWidth = 100 / arraySize,
    divsHeight = [],
    divsArray,
    currentAlgorithm = algorithmSelect.value;





barsSelect.addEventListener('change', () => {
  renderBars();
})


startAlgorithmBtn.addEventListener('click', () => {
  
  quickSort(divsHeight, 0, divsHeight.length -1);
})

generateArrayBtn.addEventListener('click', ()=> {
  renderBars();
})


function renderBars() {
  timeDelay = parseInt(speedSelect.value);
  console.log(timeDelay);
  time = 0;
  algorithmContainerEl.innerHTML = '';
  divsHeight = [];
  divsArray = [];
  let amountOfBars = parseInt(barsSelect.value);
  let widthOfBar = 100 / amountOfBars;

  for (let i = 0; i < amountOfBars; i++) {
    const newBar = document.createElement('div');
    newBar.classList.add('bar');
    let height = (Math.random() * 90) + 10 ;
    height = parseFloat(height.toFixed(1));
    divsHeight.push(height);
    newBar.setAttribute('style', `width: ${widthOfBar}%; height: ${height}%;`);
    algorithmContainerEl.append(newBar);
  }
  divsArray = [...document.querySelectorAll('.bar')];
  
}


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

function insertionSort() {
  let i, x, temp;
  for (i=0; i < divsHeight.length; i++ ) {
    
    if (divsHeight[i] > divsHeight[i + 1]) {
      transformColor(divsArray[i], divsArray[i+1], "green")
      temp = divsHeight[i];
      divsHeight[i] = divsHeight[i+1];
      divsHeight[i+1] = temp;
      transformDiv(divsArray[i], divsHeight[i], divsArray[i+1], divsHeight[i+1])
      transformColor(divsArray[i], divsArray[i+1], "purple")
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


function bubbleSort() {
  
  let i, x, swapped;
  
  for (i = 0; i < divsHeight.length -1; i++) {
    swapped = false;
    for (x = 0; x < divsHeight.length - i -1; x++) {
        transformColor(divsArray[x], divsArray[x+1], 'blue')
      if (divsHeight[x] > divsHeight[x + 1]) {
        let temp = divsHeight[x];
        divsHeight[x] = divsHeight[x+1];
        divsHeight[x+1] = temp;
        transformDiv(divsArray[x], divsHeight[x], divsArray[x+1], divsHeight[x+1], 'green');
        transformColor(divsArray[x], divsArray[x+1], 'green');
        
        swapped = true;
      }
      transformColor(divsArray[x], null, 'white')
    }
    finalPosition(divsArray[x], 'purple');
    if (swapped === false) {
      window.setTimeout(() => {
        for (let y = 0; y < x; y++) {
          divsArray[y].style.backgroundColor = 'purple';
        }
      }, time += timeDelay)
      break;
    }
  }

  
}

function finalPosition(div,color) {
  window.setTimeout(()=> {
    div.style.backgroundColor = color;
  }, time += timeDelay);
}

function transformColor(divFirst, divSecond, color) {
  window.setTimeout(()=> {
    divFirst.style.backgroundColor = color;
    if (divSecond) {
      divSecond.style.backgroundColor = color;
    }
  }, time += timeDelay)
}

function transformDiv(divFirst, divHeightFirst, divSecond, divHeightSecond, color) {
  window.setTimeout(() => {
    divFirst.style.height = `${divHeightFirst}%`
    divSecond.style.height = `${divHeightSecond}%`
    // divFirst.style.backgroundColor = 'green';
    // divSecond.style.backgroundColor = 'green';
  }, time += timeDelay);
  
}





