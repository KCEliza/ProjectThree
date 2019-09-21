const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createSchema = new Schema({
username: {
  type: String,
  require: true
  },
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: [true, "text is required"]
  },
  projectLevel: {
    type: String,
  },
  projectDiff:{
    type:String,
  },
  tags: {
    type: Array
  }

});



const Create = mongoose.model("Create", createSchema);

module.exports = Create;
