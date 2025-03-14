const {
  binarySearch,
  quickSort,
  breadthFirstSearch,
} = require("../services/algorithmService");

const { addnewLog, getLog, getAllLogs } = require("../services/LogService");

const binarySearchFunction = async (req, res) => {
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

    //Perform binary Search
    const result = binarySearch(array, number);

    //create a new log and save it to database
    addnewLog("Binary Search", { array, number }, result);

    return res.status(200).json({ index: result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const quickSortFunction = async (req, res) => {
  try {
    const { array } = req.body;

    //To check if inputs are not empty
    if (!array) {
      return res.status(400).json({ error: "body not def error" });
    }

    //To check if inputs are of correct datatypes
    if (!Array.isArray(array)) {
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

    //Performs quick sort
    const result = quickSort(array);

    //create a new log and save it to database
    addnewLog("Quick Sort", array, result);

    return res.status(200).json({ sortedArray: result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const breadthFirstSearchFunction = (req, res) => {
  try {
    const { array, number } = req.body;

    //To check if inputs are not empty
    if (!array || !number) {
      return res.status(400).json({ error: "body not def error" });
    }

    //To check if inputs are of correct datatypes
    if (!(typeof number === "number")) {
      return res.status(400).json({ error: "number error" });
    }

    //To check if array is not empty
    if (array.length <= 0) {
      return res.status(400).json({ error: "number null" });
    }

    //To check if array contains only numbers
    // if (!array.every((num) => typeof num === "object")) {
    //   return res.status(400).json({ error: "not all nums" });
    // }

    const result = breadthFirstSearch(array, number);

    return res.status(200).json({ found: result });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const algorithmLogs = async (req, res) => {
  try {
    //Gets all logs from database
    const logs = await getAllLogs();
    return res.status(200).json({ Logs: logs });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = {
  binarySearchFunction,
  quickSortFunction,
  breadthFirstSearchFunction,
  algorithmLogs,
};
