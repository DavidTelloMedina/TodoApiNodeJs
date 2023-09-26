import Category from "./categories.model.js";
import Task from "./tasks.model.js";
import User from "./users.model.js";

const initModels = () => {
  Task.belongsTo(Category, {foreignKey: 'categoryId'}),
  
  Category.hasMany(Task, {foreignKey: 'categoryId'});

  Task.belongsTo(User, {foreignKey: 'userId'}),
  
  User.hasMany(Task, {foreignKey: 'userId'});
};

export default initModels;