import { Router } from "express";
import { getAllCategories, createCategory } from "./categories.controllers.js";

const router = Router();

router.route('/categories')
  .get(getAllCategories)
  .post(createCategory)

export default router;