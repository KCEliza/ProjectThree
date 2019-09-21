const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
// /api/todos/all
// get all todos from the signed in user
router.get("/all", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Create.find({ author: req.user.id }, (err, create) => {
        res.json(create);
    });
});
// /api/todos/new
// add new todo, update the user to have todo id
router.post("/new", authMiddleware.isLoggedIn, function (req, res, next) {
    const newCreate = new db.Create({
        username: req.body.username,
        title: req.body.title,
        description: req.body.description,
        projectLevel: req.body.projectLevel,
        projectDiff: req.body.projectDiff,
        tags: req.body.tags
    });
    console.log(req.body);
    newCreate.save((err, newCreate) => {
        if (err) throw err;
        db.Users.findByIdAndUpdate(req.user.id, { $push: { creates: newCreate._id } }, (err, user) => {
            if (err) throw err;
            res.send(newCreate);
        });
    });
});
// /apiCreate/remove
// removed todo based on id, updates user
// router.delete("/remove", authMiddleware.isLoggedIn, function (req, res, next) {
//     db.Create.findByIdAndDelete(req.body.id, (err, todo) => {
//         if (err) throw err;
//         db.Users.findByIdAndUpdate(todo._id, { $pull: { 'todos': todo._id } }, { new: true }, (err, user) => {
//             if (err) throw err;
//             res.send(user);
//         });
//     });
// });
// // /api/create/update
// // update a todo based on id
// router.put("/update", authMiddleware.isLoggedIn, function (req, res, next) {
//     db.Create.findByIdAndUpdate(req.body.id, { todo: req.body.create }, { new: true }, (err, create) => {
//         if (err) throw err;
//         res.json(create);
//     });
// });
module.exports = router;



// const router = require("express").Router();
// const passport = require("../../config/passport");
// const db = require("../../models");
// const authMiddleware = require("../../config/middleware/authMiddleware");

// // /api/todos/all
// // get all todos from the signed in user
// router.get("/all", authMiddleware.isLoggedIn, function (req, res, next) {
//     db.Create.find({ author: req.user.id }, (err, create) => {
//         res.json(create);
//     });
// });

// // /api/todos/new
// // add new todo, update the user to have todo id
// router.post("/new", authMiddleware.isLoggedIn, function (req, res, next) {
//     const newCreate = new db.Create({
//         username: req.body.username,
//         title: req.body.title,
//         description: req.body.description,
//         projectLevel: req.body.projectLevel,
//         difficulty: req.body.difficulty,
//         tags: req.body.tags
//     });

//     newCreate.save((err, newCreate) => {
//         if (err) throw err;
//         db.Create.findByIdAndUpdate(req.user.id, { $push: { todos: newTodo._id } }, (err, user) => {
//             if (err) throw err;
//             res.send(newCreate, user);
//         });
//     });
// });

// // /apiCreate/remove
// // removed todo based on id, updates user
// router.delete("/remove", authMiddleware.isLoggedIn, function (req, res, next) {
//     db.Create.findByIdAndDelete(req.body.id, (err, todo) => {
//         if (err) throw err;
//         db.Create.findByIdAndUpdate(todo._id, { $pull: { 'todos': todo._id } }, { new: true }, (err, user) => {
//             if (err) throw err;
//             res.send(user);
//         });
//     });
// });

// // /api/create/update
// // update a todo based on id
// router.put("/update", authMiddleware.isLoggedIn, function (req, res, next) {
//     db.Create.findByIdAndUpdate(req.body.id, { todo: req.body.create }, { new: true }, (err, create) => {
//         if (err) throw err;
//         res.json(create);
//     });
// });

// module.exports = router;