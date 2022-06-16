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


function merge(left, right, arr) {
    const copiedArr = arr.slice(0);
    const newArr = arr;
    let copyIndex = left.startIndex;
    let rightCount = right.startIndex;
    let leftCount = left.startIndex;
    while ((leftCount <= left.endIndex) && (rightCount <= right.endIndex)) {
        if (copiedArr[leftCount] < copiedArr[rightCount]) {
            newArr[copyIndex] = copiedArr[leftCount];
            mergeSortTransform(divsArray[copyIndex], copiedArr[leftCount]);
            leftCount += 1;
        } else {
            newArr[copyIndex] = copiedArr[rightCount];
            mergeSortTransform(divsArray[copyIndex], copiedArr[rightCount]);
            rightCount += 1;
        }
        copyIndex += 1;
    }

    if (leftCount <= left.endIndex) {
        for (let i = leftCount; i <= left.endIndex; i++) {
            newArr[copyIndex] = copiedArr[i];
            mergeSortTransform(divsArray[copyIndex], copiedArr[i]);
            copyIndex += 1;
        }
    } else {
        for (let i = rightCount; i <= right.endIndex; i++) {
            newArr[copyIndex] = copiedArr[i]
            mergeSortTransform(divsArray[copyIndex], copiedArr[i]);
            copyIndex += 1;
        }
    }
    return { arr: newArr, startIndex: left.startIndex, endIndex: right.endIndex };
}

function mergeSort(arrObj) {
    const half = Math.ceil((arrObj.endIndex + arrObj.startIndex) / 2);

    if (arrObj.startIndex === arrObj.endIndex) {
        return { arr: arrObj.arr, startIndex: arrObj.startIndex, endIndex: arrObj.endIndex };
    }
    return merge(
        mergeSort({ arr: arrObj.arr, startIndex: arrObj.startIndex, endIndex: (half - 1) }),
        mergeSort({ arr: arrObj.arr, startIndex: half, endIndex: arrObj.endIndex }),
        arrObj.arr,
    );
}

function quickSort(array, start, end) {
    const pivotValue = array[end];
    const newArray = array;
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (newArray[i] < pivotValue) {
            const temp = newArray[i];
            newArray[i] = newArray[pivotIndex];
            newArray[pivotIndex] = temp;
            transformDiv(divsArray[i], newArray[i], divsArray[pivotIndex], newArray[pivotIndex]);
            pivotIndex += 1;
        }
    }
    const pivotTemp = newArray[pivotIndex];
    newArray[pivotIndex] = array[end];
    newArray[end] = pivotTemp;
    transformDiv(divsArray[pivotIndex], array[pivotIndex], divsArray[end], array[end]);
    if ((pivotIndex - start > 0) && (end - pivotIndex > 0)) {
        quickSort(array, start, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, end);
    } else if (pivotIndex - start > 0) {
        quickSort(array, start, pivotIndex - 1);
    } else if (end - pivotIndex > 1) {
        quickSort(array, pivotIndex + 1, end);
    }
}

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
