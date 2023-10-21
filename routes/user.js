import express from "express";

import {
  getAllUsers,
  register,
  login,
  getMyProfile,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", register);
router.post("/login", login);
router.get("/me", getMyProfile);

export default router;
