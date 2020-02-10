/*
  How to run: Execute the following command
    node quicksort 4,56,2,7,42,18,-15,73
  The array of numbers to be sorted is comma separated argument
  in cli command.
*/

userFunction();

function userFunction() {
  const arrString = process.argv[2];
  console.log('arrString: ', arrString);

  const arrNumAsStrings = arrString.split(',');
  console.log('arrNumAsStrings: ', arrNumAsStrings);

  const numArr = new Array();
  for(i in arrNumAsStrings) {
    numArr.push(parseInt(arrNumAsStrings[i], 10));
  }
  console.log('numArr: ', numArr);

  const leftStartIndex = 0;
  const rightStartIndex = numArr.length-1;
  quickSort(numArr, leftStartIndex, rightStartIndex);

  console.log('sorted numArr: ', numArr);
}

function quickSort(elementsArr, leftIndex, rightIndex) {
  const pivotIndex = elementsArr.length > 1
                      ? findPivotIndex(elementsArr, leftIndex, rightIndex)
                      : undefined;
  
  if(pivotIndex !== undefined) {
    if(leftIndex < pivotIndex-1) {
      quickSort(elementsArr, leftIndex, rightIndex-1);
    }
    if(pivotIndex < rightIndex) {
      quickSort(elementsArr, pivotIndex, rightIndex);
    }
  }

  return elementsArr;
}

function findPivotIndex(elementsArr, leftIndex, rightIndex) {
  const pivotIndex = Math.floor((leftIndex + rightIndex) / 2);
  console.log('pivotIndex: ', pivotIndex);
  const pivotElement = elementsArr[pivotIndex];
  console.log('pivotElement: ', pivotElement);

  while(leftIndex <= rightIndex) {
    while(elementsArr[leftIndex] < pivotElement) { leftIndex++; }
    while(elementsArr[rightIndex] > pivotElement) { rightIndex--; }
    if(leftIndex <= rightIndex) {
      swap(elementsArr, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }

  return leftIndex;
}

function swap(elementsArr, leftIndex, rightIndex) {
  const temp = elementsArr[leftIndex];
  elementsArr[leftIndex] = elementsArr[rightIndex];
  elementsArr[rightIndex] = temp;
}