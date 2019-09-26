
const router = require("express").Router();
const db = require("../../models");


router.get("/new/:id",(req, res) => {
    db.Comment.findAll({ _id: req.params.id, array: [comments]})
    .then(function(dbComment){
        console.log(dbComment[0])
        let comment = dbComment.comment
        res.render(comment)
    })
    .catch(function(err){
        console.log(res.json(err))
    });

});

router.put("/new", function (req, res, next) {
    const newComment = new db.Comment({
        comment: req.body.comment
    });
})

router.post("/new", function (req, res) {
    db.Comment.create(req.body, (err, comment) => {

        res.json(comment);
        console.log(comment)
    });
});






// router.post("/new", function (req, res) {
//     const newComment = new db.Comment({
//         comment: req.user.comment
//     });
//     console.log(req.body);
//     console.log(req.user);
//     newComment.save((err, newCommment) => {
//         if (err) throw err;
//         db.Comment.findByIdAndUpdate(req.user.id, { $push: { comment: newComment._id } }, (err, user) => {
//             if (err) throw err;
//             res.send(newCommment);
//         });
//     })
// });


module.exports = router;