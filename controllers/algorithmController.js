const {
  binarySearch,
  quickSort,
  breadthFirstSearch,
} = require("../services/algorithmService");

const { addnewLog, getLog, getAllLogs } = require("../services/LogService");

const binarySearchFunction = (req, res) => {
  try {
    const { array, number } = req.body;

    //To check if inputs are not empty
    if (!array || !number) {
      return res.status(400).json({ error: "body not def error" });
    }

    //To check if inputs are of correct datatypes
    if (!Array.isArray(array) || !(typeof number === "number")) {
      return res.status(400).json({ error: "number error" });
    }

    //To check if array is not empty
    if (array.length <= 0) {
      return res.status(400).json({ error: "number null" });
    }

    //To check if array contains only numbers
    if (!array.every((num) => typeof num === "number")) {
      return res.status(400).json({ error: "not all nums" });
    }

    //To check if array is sorted
    if (
      !array.every(
        (value, index, arr) => index === 0 || value >= arr[index - 1]
      )
    ) {
      return res.status(400).json({ error: "not sorted" });
    }

    const result = binarySearch(array, number);
    return res.status(200).json({ index: result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const quickSortFunction = () => {};

const breadthFirstSearchFunction = () => {};

const algorithmLogs = () => {};

module.exports = {
  binarySearchFunction,
  quickSortFunction,
  breadthFirstSearchFunction,
  algorithmLogs,
};
