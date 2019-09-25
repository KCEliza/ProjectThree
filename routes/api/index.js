const router = require("express").Router();
const userRoutes = require("./userRoutes");
const createRoutes = require("./createRoutes");


router.use("/users", userRoutes);
router.use("/create", createRoutes);
router.use("/card", createRoutes);

module.exports = router;
