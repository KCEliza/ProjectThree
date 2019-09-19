const router = require("express").Router();
const userRoutes = require("./userRoutes");
const CreateRoutes = require("./CreateRoutes");

router.use("/users", userRoutes);
router.use("/create", CreateRoutes);

module.exports = router;
