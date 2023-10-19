import mongoose from "mongoose";

//create table
const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

export const User = mongoose.model("User", schema);
