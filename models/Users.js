const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  classCode: {
    type: String,
    unique: false,
    require: [true, "please select your classcode"]
  },
  username: {
    type: String,
    unique: true,
    required: [true, "username is required"]
  },

  fName: {
    type: String,
    trim: true,
    required: [true, "First Name is Required"]
  },

  lName: {
    type: String,
    trim: true,
    required: [true, "Last Name is Required"]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    unique: false,
    validate: {
      validator: function (v) {
        return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(v);
      },
      message: props => `${props.value} is not a valid password`
    },
    required: [true, "password is required"]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  lastUpdated:{ Date,
  // `fullName` must be of type String
  fullName: String
},
creates: [
  {
    type: Schema.Types.ObjectId,
    ref: "Create"
  }
]

  });

usersSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

usersSchema.methods.validPassword = function (password, encrypted) {
  return bcrypt.compareSync(password, encrypted);
}

usersSchema.methods.lastUpdatedDate = function () {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};


const Users = mongoose.model("Users", usersSchema);

module.exports = Users;
