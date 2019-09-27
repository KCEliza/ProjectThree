const router = require("express").Router();
const userRoutes = require("./userRoutes");
const createRoutes = require("./createRoutes");
const commentRoutes = require("./commentRoutes");
const db = require("../../models");



router.use("/users", userRoutes);
router.use("/create", createRoutes);
router.use("/card", createRoutes);
router.use("/comment", commentRoutes);
router.put("/vote/:id", function(req, res) {  
    db.Create.update({ _id: req.params.id}, req.body)
    .then(idea => res.end())
    .catch(err => res.json(err))
})


module.exports = router;
