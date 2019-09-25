
const router = require("express").Router();
const db = require("../../models");


router.post("/new", function (req, res) {
    db.Comment.create(req.body, (err, comment) => {

        res.json(comment);
        console.log(comment)
    });
});

module.exports = router;