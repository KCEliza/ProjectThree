const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createSchema = new Schema({
Title: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  Description: {
    type: String,
    unique: false,
    required: [true, "text is required"]
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

});

const Create = mongoose.model("Create", createSchema);

module.exports = Create;
