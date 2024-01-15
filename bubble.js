function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}

// function bubbleSort(array) {
//   console.log(array.sort((a, b) => a - b));
// }

bubbleSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);
