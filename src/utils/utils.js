export const getArrayWithEvenNumbers = (arraySize) => {
  return Array.from({length: arraySize}, (_, i) => 2 * (i + 1));
}