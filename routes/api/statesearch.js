const router = require("express").Router();
const statesearchController = require("../../controllers/statesearchController");

// Matches with "/api/statesearch"
router.route("/")
    .get(statesearchController.findAll)
    .post(statesearchController.create);

// Matches with "/api/statesearch/:id"
router
    .route("/:id")
    .get(statesearchController.findById)
    .put(statesearchController.update)
    .delete(statesearchController.remove);

module.exports = router;
