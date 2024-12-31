function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
console.log(flattenAndSort([[], [1]]), [1]);
