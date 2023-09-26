import { Router } from "express";
import { getAllUsers, createUser } from "./users.controllers.js";

const router = Router();

router.route('/users')
  .get(getAllUsers)
  .post(createUser);

export default router;