// select elements
const algorithmSelect = document.getElementById('select_algorithm');
const barsSelect = document.getElementById('select_bars');
const speedSelect = document.getElementById('select_speed');

// btn elements
// const pathFindingVisualerBtn = document.getElementById('path_finding_btn');
const startAlgorithmBtn = document.getElementById('start_algorithm_btn');
const generateArrayBtn = document.getElementById('generate_array_btn');
// algorithm container
const algorithmContainerEl = document.getElementById('visualiser')
let arraySize = parseInt(barsSelect.value, 10);
let widthOfBar = 100 / arraySize;
let time = 0;
let timeDelay = parseInt(speedSelect.value, 10);
let divsHeight = [];
let divsArray;
let currentAlgorithm = algorithmSelect.value;

function generateArrayOfBars() {
  resetGlobalVariables();
  for (let i = 0; i < arraySize; i++) {
    createNewBar();
  }
  divsArray = [...document.querySelectorAll('.bar')];
}

generateArrayOfBars();

algorithmSelect.addEventListener('change', (event) => {
  currentAlgorithm = event.target.value;
});

barsSelect.addEventListener('change', (event) => {
  arraySize = parseInt(event.target.value, 10);
  generateArrayOfBars();
});

speedSelect.addEventListener('change', (event) => {
  timeDelay = parseInt(event.target.value, 10);
});

generateArrayBtn.addEventListener('click', () => {
  generateArrayOfBars();
});

startAlgorithmBtn.addEventListener('click', () => {
  switch (currentAlgorithm) {
    case 'merge':
      mergeSort({ arr: divsHeight, startIndex: 0, endIndex: divsHeight.length - 1 });
      break;
    case 'quick':
      quickSort(divsHeight, 0, divsHeight.length - 1);
      break;
    case 'insertion':
      insertionSort();
      break;
    case 'bubble':
      bubbleSort();
      break;
    default:
      mergeSort({ arr: divsHeight, startIndex: 0, endIndex: divsHeight.length - 1 });
  }
});

function resetGlobalVariables() {
  timeDelay = parseInt(speedSelect.value, 10);
  time = 0;
  algorithmContainerEl.innerHTML = '';
  divsHeight = [];
  divsArray = [];
  arraySize = parseInt(barsSelect.value, 10);
  widthOfBar = 100 / arraySize;
}

function createNewBar() {
  const newBar = document.createElement('div');
  newBar.classList.add('bar');
  let height = (Math.random() * 90) + 10;
  height = parseFloat(height.toFixed(1));
  divsHeight.push(height);
  newBar.setAttribute('style', `width: ${widthOfBar}%; height: ${height}%;`);
  algorithmContainerEl.append(newBar);
}

// function transformColor(divFirst, divSecond, color) {
//   window.setTimeout(() => {
//     divFirst.style.backgroundColor = color;
//     if (divSecond) {
//       divSecond.style.backgroundColor = color;
//     }
//   }, time += timeDelay);
// }

function mergeSortTransform(div, divHeight) {
  window.setTimeout(() => {
    div.style.height = `${divHeight}%`;
  }, time += timeDelay);
}

function transformDiv(divFirst, divHeightFirst, divSecond, divHeightSecond) {
  window.setTimeout(() => {
    divFirst.style.height = `${divHeightFirst}%`;
    divSecond.style.height = `${divHeightSecond}%`;
  }, time += timeDelay);
}
