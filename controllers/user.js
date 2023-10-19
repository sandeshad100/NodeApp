import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  //cookies are not optional
  res.status(201).cookie("data", "mydata").json({
    success: true,
    message: "Registered Successfully",
  });
};

export const getUserDetailes = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "Updated",
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const user = await User.findById(id);

  res.json({
    success: true,
    message: "Deleted",
  });
};
