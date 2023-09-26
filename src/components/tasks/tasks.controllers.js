import Task from "../../models/tasks.model.js";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      attributes: ["id", "title", "description", "completed", "category_id", "user_id"],
    });
    res.json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTaskByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findAll({
      where: { userId: id },
    });
    res.json(task);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = req.body;

    await Task.create(
      newTask
    )
    res.status(201).end()
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: { id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const task = await Task.update(body, {
      where: { id }
    });
    res.json(task);
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getAllTasks, getTaskByUser, createTask, deleteTask, updateTask };
