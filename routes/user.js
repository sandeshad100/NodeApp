import express from "express";

import {

  getAllUsers,
  getUserDetailes,
  register,
  login

} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", register);
router.post("/login", login);


// shorthand router, if route is same
router.route("/userid/:id").get(getUserDetailes);


export default router;
