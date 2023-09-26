import Category from "../../models/categories.model.js";

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ["id", "name", "description"]
    });
    res.json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;

    await Category.create(
      newCategory
    )
    res.status(201).end()
  } catch (error) {
    res.status(400).json()
  }
}

export { getAllCategories, createCategory };