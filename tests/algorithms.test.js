const {
  binarySearch,
  quickSort,
  breadthFirstSearch,
} = require("../services/algorithmService");

//Binary search Testcases
test("Testing Binary Search", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
});

test("Testing Binary Search", () => {
  expect(binarySearch([1, 2, 3, 4, 5], 8)).toBe(-1);
});

//Quick sort Testcases
test("Testing Quick Sort", () => {
  expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test("Testing Quick Sort", () => {
  expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

//Breath first search Testcases
test("Testing Breath First Search", () => {
  expect(breadthFirstSearch({ 1: [2, 3], 2: [1], 3: [1] }, 3)).toEqual([
    3, 1, 2,
  ]);
});
