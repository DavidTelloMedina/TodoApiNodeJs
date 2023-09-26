import express from "express";
import db from "./utils/database.js";
import initModels from "./models/initModels.js";
import usersRoutes from "./components/users/users.routes.js";import tasksRoutes from "./components/tasks/tasks.routes.js";
import categoriesRoutes from "./components/categories/categories.routes.js";

initModels();

db.authenticate()
 .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("Base de datos sync"))
  .catch((error) => console.log(error));

const PORT = process.env.PORT ?? 8000;
const app = express();

app.use(express.json());

app.use(usersRoutes);
app.use(tasksRoutes);
app.use(categoriesRoutes);

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})