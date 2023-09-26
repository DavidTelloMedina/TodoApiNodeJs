import User from "../../models/users.model.js";
import Task from "../../models/tasks.model.js";
import Category from "../../models/categories.model.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "email", "password"],
      include: [
        {
          model: Task,
          attributes: ["id", "title", "description", "completed"],
          include: { model: Category },
        },
      ],
    });
    res.json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = req.body;

    await User.create(
      user
    )

    res.status(201).end();
  } catch (error) {
    res.status(400).json(error);
  }
};

export { getAllUsers, createUser };
