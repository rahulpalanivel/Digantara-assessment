const binarySearch = (array, number) => {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === number) {
      return mid;
    }

    if (number < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];
  let leftArray = [];
  let rightArray = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
};

const breadthFirstSearch = (graph, startNode) => {
  let visited = new Set();
  let queue = [startNode];
  let result = [];

  visited.add(startNode);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode);

    if (graph[currentNode]) {
      for (let neighbor of graph[currentNode]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
};

module.exports = { binarySearch, quickSort, breadthFirstSearch };
