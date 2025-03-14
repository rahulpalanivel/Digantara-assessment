const Log = require("../models/logSchema");

//Adds a new Log
const addnewLog = async (algorithmName, inputData, outputData) => {
  const log = new Log({
    Algorithm_Name: algorithmName,
    Input_Data: inputData,
    Output_Data: outputData,
  });
  await log.save();
};

//Gets log by name
const getLog = async (algorithmName) => {};

//Gets all logs
const getAllLogs = async () => {
  const logs = await Log.find();
  const allLogs = [];
  //formats the object to get only name, input and output
  logs.forEach((element) => {
    const log = {
      "Algorithm Name": element.Algorithm_Name,
      "Input Data": element.Input_Data,
      "Output Data": element.Output_Data,
    };
    allLogs.push(log);
  });
  return allLogs;
};

module.exports = { addnewLog, getLog, getAllLogs };
