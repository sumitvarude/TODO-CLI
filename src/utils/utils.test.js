import {getArrayWithEvenNumbers} from "./utils.js";

describe('getArrayWithEvenNumbers', () => {
  it('should get array with even numbers of given size', () => {
    const evenNumbers = getArrayWithEvenNumbers(20);
    expect(evenNumbers).toStrictEqual([
      2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
    ]);
  });
});