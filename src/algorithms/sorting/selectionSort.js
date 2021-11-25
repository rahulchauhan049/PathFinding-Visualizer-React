export function getSelectionsortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSort(array, animations);
    return animations;
  }
  

// Function for selection sort
const selectionSort = (array, animation) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        animation.push({ animationType: "starting", index: [minIndex, 0] });
        for (let j = i + 1; j < array.length; j++) {
            animation.push({ animationType: "comparing", index: [minIndex, j] });
            if (array[j] < array[minIndex]) {
                minIndex = j;
                animation.push({ animationType: "minimum", index: [minIndex, i] });
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
            animation.push({ animationType: "swaping", index: [i, minIndex], value: [array[i], array[minIndex]]});
        }
        animation.push({ animationType: "doneComparing", index: [0,0] });
    }
    return array;
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
