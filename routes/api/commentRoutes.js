
const router = require("express").Router();
const db = require("../../models");


router.post("/new", function (req, res) {
    db.Comment.create(req.body, (err, comment) => {

        res.json(comment);
        console.log(comment)
    });
});

router.put("/new", function (req, res, next) {
    const newComment = new db.Comment({
        comment: req.body.comment
    });
})


module.exports = router;