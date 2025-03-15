const invalidRoutes = (req, res, next) => {
  res.status(404).json({ status: 404, message: "API Route not found" });
};

module.exports = invalidRoutes;
