const express = require("express");
const router = express.Router();

const {
  binarySearchFunction,
  quickSortFunction,
  breadthFirstSearchFunction,
  algorithmLogs,
} = require("../controllers/algorithmController");

router.post("/binarySearch", binarySearchFunction);
router.post("/quickSort", quickSortFunction);
router.post("/breadthFirstSearch", breadthFirstSearchFunction);
router.get("/algorithmLogs", algorithmLogs);

module.exports = router;
