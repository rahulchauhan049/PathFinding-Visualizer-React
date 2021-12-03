export function getInsertionSortAnimations(array) {
  const animations = [];
  let auxillaryArray = array.slice();
  insertionSortHelper(auxillaryArray, 0, animations);
    console.log(auxillaryArray)
  return animations;
}

// function for insertion sort
function insertionSortHelper(arr, start, animations) {
    for (let i = start + 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            animations.push([j, j + 1]);
            animations.push([j, arr[j]]);
            animations.push([j + 1, arr[j + 1]]);
            animations.push([j + 1, currentVal]);
            animations.push([j, currentVal]);
            arr[j + 1] = arr[j];
        }

        animations.push([j + 1, currentVal]);
        arr[j + 1] = currentVal;
    }
}
