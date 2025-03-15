const {
  binarySearch,
  quickSort,
  breadthFirstSearch,
} = require("../services/algorithmService");

const { addnewLog, getLog, getAllLogs } = require("../services/LogService");

const displayError = require("../middleware/displayError");
const displayOutput = require("../middleware/displayOutput");

const binarySearchFunction = async (req, res, next) => {
  try {
    const { array, number } = req.body;

    //To check if inputs are not empty
    if (!array || !number) {
      return next(displayError(400, "Inputs are Empty"));
    }

    //To check if inputs are of correct datatypes
    if (!Array.isArray(array) || !(typeof number === "number")) {
      return next(displayError(400, "Inputs are not of correct datatype"));
    }

    //To check if array is not empty
    if (array.length <= 0) {
      return next(displayError(400, "Array is empty"));
    }

    //To check if array contains only numbers
    if (!array.every((num) => typeof num === "number")) {
      return next(displayError(400, "Array should contain only numbers"));
    }

    //To check if array is sorted
    if (
      !array.every(
        (value, index, arr) => index === 0 || value >= arr[index - 1]
      )
    ) {
      return next(displayError(400, "Array is not sorted"));
    }

    //Perform binary Search
    const result = binarySearch(array, number);

    //create a new log and save it to database
    addnewLog("Binary Search", { array, number }, result);

    displayOutput(res, 200, result);
  } catch (err) {
    next(displayError(err.status, err.message));
  }
};

const quickSortFunction = async (req, res, next) => {
  try {
    const { array } = req.body;

    //To check if inputs are not empty
    if (!array) {
      return next(displayError(400, "Inputs are Empty"));
    }

    //To check if inputs are of correct datatypes
    if (!Array.isArray(array)) {
      return next(displayError(400, "Inputs are not of correct datatype"));
    }

    //To check if array is not empty
    if (array.length <= 0) {
      return next(displayError(400, "Array is empty"));
    }

    //To check if array contains only numbers
    if (!array.every((num) => typeof num === "number")) {
      return next(displayError(400, "Array should contain only numbers"));
    }

    //Performs quick sort
    const result = quickSort(array);

    //create a new log and save it to database
    addnewLog("Quick Sort", array, result);

    displayOutput(res, 200, result);
  } catch (err) {
    next(displayError(err.status, err.message));
  }
};

const breadthFirstSearchFunction = (req, res, next) => {
  try {
    const { array, number } = req.body;

    //To check if inputs are not empty
    if (!array || !number) {
      return next(displayError(400, "Inputs are Empty"));
    }

    //To check if inputs are of correct datatypes
    if (!(typeof number === "number")) {
      return next(displayError(400, "Inputs are not of correct datatype"));
    }

    const result = breadthFirstSearch(array, number);

    //create a new log and save it to database
    addnewLog("Breath First Search", { array, number }, result);

    displayOutput(res, 200, result);
  } catch (err) {
    next(displayError(err.status, err.message));
  }
};

const algorithmLogs = async (req, res, next) => {
  try {
    const { algorithmName } = req.query;
    var logs;
    //Gets all logs from database
    if (algorithmName) {
      //Gets logs by name
      logs = await getLog(algorithmName);
    } else {
      //Gets all logs
      logs = await getAllLogs();
    }
    if (logs.length === 0) {
      next(displayError(404, "Log not found"));
    } else {
      displayOutput(res, 200, logs);
    }
  } catch (err) {
    next(displayError(err.status, err.message));
  }
};

module.exports = {
  binarySearchFunction,
  quickSortFunction,
  breadthFirstSearchFunction,
  algorithmLogs,
};
