const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createSchema = new Schema({
username: {
  type: String,
  unique:true,
  require:[true]
  },
  title: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  description: {
    type: String,
    unique: false,
    required: [true, "text is required"]
  },
  projectLevel: {
    type: String,
  },
  difficulty:{
    type:String,
  },
  tags: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Create = mongoose.model("Create", createSchema);

module.exports = Create;
