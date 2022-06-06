
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
    widthOfBar = 100 / arraySize,
    time = 0,
    timeDelay = parseInt(speedSelect.value),
    divWidth = 100 / arraySize,
    divsHeight = [],
    divsArray,
    currentAlgorithm = algorithmSelect.value;
 
generateArrayOfBars()

algorithmSelect.addEventListener('change', (event) => {
  currentAlgorithm = event.target.value;
})

barsSelect.addEventListener('change', (event) => {
  console.log("triggeredChange")
  arraySize = parseInt(event.target.value);
  generateArrayOfBars()
})

speedSelect.addEventListener('change', (event) => {
  console.log("triggered change");
  timeDelay = parseInt(event.target.value);
})

generateArrayBtn.addEventListener('click', ()=> {
  generateArrayOfBars()
})


startAlgorithmBtn.addEventListener('click', () => {
  switch (currentAlgorithm) {
    case "merge":
      mergeSort({arr: divsHeight, startIndex: 0, endIndex: divsHeight.length -1});
      break;
    case "quick":
      quickSort(divsHeight, 0, divsHeight.length -1);
      break;
    case "insertion":
      insertionSort();
      break;
    case "bubble":
      bubbleSort();
      break;
    default:
      mergeSort({arr: divsHeight, startIndex: 0, endIndex: divsHeight.length -1});
  }
  
})



function resetGlobalVariables() {
  timeDelay = parseInt(speedSelect.value);
  console.log(timeDelay);
  time = 0;
  algorithmContainerEl.innerHTML = '';
  divsHeight = [];
  divsArray = [];
  arraySize = parseInt(barsSelect.value);
  widthOfBar = 100 / arraySize;
}

function createNewBar() {
  const newBar = document.createElement('div');
  newBar.classList.add('bar');
  let height = (Math.random() * 90) + 10 ;
  height = parseFloat(height.toFixed(1));
  divsHeight.push(height);
  newBar.setAttribute('style', `width: ${widthOfBar}%; height: ${height}%;`);
  algorithmContainerEl.append(newBar);
}


function generateArrayOfBars() {
  resetGlobalVariables()
  for (let i = 0; i < arraySize; i++) {
    createNewBar()
  }
  divsArray = [...document.querySelectorAll('.bar')];
  
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

function mergeSortTransform(div, divHeight) {
  window.setTimeout(() => {
    div.style.height = `${divHeight}%`;
  }, time += timeDelay);
}

function transformDiv(divFirst, divHeightFirst, divSecond, divHeightSecond, color) {
  window.setTimeout(() => {
    divFirst.style.height = `${divHeightFirst}%`
    divSecond.style.height = `${divHeightSecond}%`
    // divFirst.style.backgroundColor = 'green';
    // divSecond.style.backgroundColor = 'green';
  }, time += timeDelay);
  
}





