import express from "express";

import {
  deleteUser,
  getAllUsers,
  getUserDetailes,
  register,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/all", getAllUsers);
router.post("/new", register);

// router.get("/userid/:id", getUserDetailes);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

// shorthand router, if route is same
router
  .route("/userid/:id")
  .get(getUserDetailes)
  .put(updateUser)
  .delete(deleteUser);

export default router;
