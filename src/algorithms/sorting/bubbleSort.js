export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    return animations;
  }
  
// Function for bubble sort  
const bubbleSort = (array, animation) => {
    let swapped;
    let arrayLength = array.length-1;
    do {
      swapped = false;
        for (let i = 0; i < arrayLength; i++) {
            animation.push({ animationType: "comparing", index: [i, i + 1] });
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                animation.push({ animationType: "swaping", index: [i, i + 1], value: [array[i], array[i+1]]});
            swapped = true;
            }
            animation.push({ animationType: "doneComparing", index: [i, i + 1] });
        }
        arrayLength--;
    } while (swapped);
    return animation;
}