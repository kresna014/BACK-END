import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUsersId,
} from "../controllers/users.controllers";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUsersId);
userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser);

export { userRouter };
