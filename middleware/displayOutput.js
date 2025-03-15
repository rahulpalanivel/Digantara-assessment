const displayOutput = (res, status, message) => {
  return res.status(status).json({ Output: message });
};

module.exports = displayOutput;
