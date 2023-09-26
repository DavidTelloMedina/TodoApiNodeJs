import { Router } from "express";
import { getAllTasks, getTaskByUser, createTask, deleteTask, updateTask } from "./tasks.controllers.js";

const router = Router();

router.route('/tasks')
  .get(getAllTasks)
  .post(createTask);

router.route('/tasks/:id')
.get(getTaskByUser)
.delete(deleteTask)
.put(updateTask);


export default router;