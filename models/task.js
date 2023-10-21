import mongoose from "mongoose";

//create table
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,

  },

  description: {
    type: String,
    require: true,
  },

  isCompleted: {
    type: Boolean,
    default:false,
  },
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  
});

export const Task = mongoose.model("Task", schema);
