
const router = require("express").Router();
const db = require("../../models");


router.get("/new", function (req, res) {
    db.Comment.find({}, (err, comment) => {
        res.json(comment);
        console.log(comment)
    });
});