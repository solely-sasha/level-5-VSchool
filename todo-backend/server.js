const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

const todos = [
  {
    name: "create an express server",
    description: "manages a list of todos",
    imgUrl: "http://www.myimage",
    completed: "true",
    _id: uuidv4(),
  },
  {
    name: "create endpoints",
    description: "allows new todo items to be posted to the array",
    imgUrl: "http://www.myimage",
    completed: "false",
    _id: uuidv4(),
  },
];

app.post("/", (req, res) => {
  const newTodo = req.body;
  newTodo._id = uuidv4();
  todos.push(newTodo);
  res.send("new todo added to the database");
});

app.get("/", (req, res) => {
  res.send(todos);
});

app.put("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const update = req.body;
  const todoIndex = todos.findIndex((todo) => todo._id === todoId);
  const updatedTodo = Obect.assign(todos[todoIndex], update);
  res.send(updatedTodo);
});

app.delete("/:movieId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo._id === todoId);
  todos.splice(todoIndex, 1);
  res.send("todo deleted");
});

app.listen(9000, () => {
  console.log("the server is listening on port 9000");
});
