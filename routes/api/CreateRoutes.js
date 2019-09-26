require('dotenv').config();
const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
const nodemailer = require("nodemailer");


// /api/todos/all

let transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: process.env.EMAIL, // TODO: your gmail account
        pass: process.env.PASSWORD // TODO: your gmail password
    },

    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});


router.get("/", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Create.find()
    .populate("comments")
    .then(data=>{
        res.json(data)
    })
    .catch(err=>console.log(err)
    )
    // NEEDDD THIISS ???????????????????
    // console.log(Schema);
//     Schema.Create.
//   find({}).
//   populate('comments').
//   exec(function (err, create) {
//     if (err) return handleError(err);
//     console.log('The author is %s', create.comment.comments);
//     // prints "The author is Ian Fleming"
//   });
});


// get all todos from the signed in user
router.get("/all", authMiddleware.isLoggedIn, function (req, res, next) {
    db.Create.find({ username: req.body.username }, (err, create) => {
        res.json(create);
        console.log(create)
    });;
});
// /api/todos/new
// add new todo, update the user to have todo id
router.post("/new", authMiddleware.isLoggedIn, function (req, res, next) {
    const newCreate = new db.Create({
        // username: req.user.username,
        title: req.body.title,
        description: req.body.description,
        projectLevel: req.body.projectLevel,
        projectDiff: req.body.projectDiff,
        tags: req.body.tags
    });
   
    newCreate.save((err, newCreate) => {
        if (err) throw err;
        db.Users.findByIdAndUpdate(req.user.id, { $push: { creates: newCreate._id } }, (err, user) => {
            if (err) throw err;
            res.send(newCreate);
        });
        // console.log(newCreate);
    });


    //DO NODEMAILER HERE
    db.Users.find({}, 'email', function(err, users){
        if (err) throw err;
        const emails = users.map(user => user.email);
        let mailOptions = {
            from: process.env.EMAIL, 
            // to: req.user.email, // email of the logged in user.
            bcc: emails,
            subject: 'New Idea on I have No Idea App', // where to put all users'
            text: `${req.user.username} has submitted a new Project Idea in your "I have not Idea" aaplication. Go check it out!`
        };
    
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return console.log('Error occurs');
            }
            return console.log('Email sent!!!');
        });
        
    })


});

// router.post("/card", function (req, res) {
//     const newComment = new db.Comment({
//         comment: req.user.comment
router.post("/card", authMiddleware.isLoggedIn, function (req, res, next) {
    const newComment = new db.Comment({
        comment: req.user.comment
    });
    console.log(req.body);
    console.log(req.user);
    newComment.save((err, newCommment) => {
        if (err) throw err;
        db.Comment.findByIdAndUpdate(req.user.id, { $push: { comment: newComment._id } }, (err, user) => {
            if (err) throw err;
            res.send(newCommment);
        });
    })
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
//     console.log(req.body);
//     console.log(req.user);
//     newComment.save((err, newCommment) => {
//         if (err) throw err;
//         db.Create.findByIdAndUpdate(req.user.id, { $push: { comment: newComment.comment } }, (err, user) => {
//             if (err) throw err;
//             res.send(newCommment);
//         });
//     })
// });


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
// module.exports = router;


// module.exports = router;
