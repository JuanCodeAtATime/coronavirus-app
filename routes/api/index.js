const router = require("express").Router();
const statesearchRoutes = require("./statesearch");

// statesearch routes
router.use("/statesearch", statesearchRoutes);

module.exports = router;
