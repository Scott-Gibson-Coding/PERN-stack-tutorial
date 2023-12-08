const express = require("express");
const cors = require("cors");
// const pool = require("./db");
const FileSystem = require("fs");

const app = express();

// middleware
app.use(cors());
app.use(express.json()); // req.body

// Task closure
//  ISSUE: (this will work in a single session, when index.js is run again, id resets to 0)
function task() {
  let id = 0;

  function createNewTask(text) {
    const taskObj = {
      todo_id: id++,
      description: text,
    };
    return taskObj;
  }
  return createNewTask;
}

const createNewTask = task();

/* ROUTES */

// create todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    // const newTodo = await pool.query(
    //   "INSERT INTO todo (description) VALUES($1) RETURNING *",
    //   [description]
    // );
    // res.json(newTodo.rows[0]);
    const taskObj = createNewTask(description);
    let dbContent = FileSystem.readFileSync(
      "data.json",
      "utf8",
      (err, data) => {
        if (err) throw err;
        return JSON.parse(data);
      }
    );
    console.log(dbContent.tasks);
    res.json({ status: "Not implemented" });
  } catch (err) {
    console.error(`POST todo failed: ${err.message}`);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    // const allTodos = await pool.query("SELECT * FROM todo");
    // res.json(allTodos.rows);
    res.json({ status: "Not implemented" });
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    // const { id } = req.params;
    // const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
    //   id,
    // ]);

    // res.json(todo.rows);
    res.json({ status: "Not implemented" });
  } catch (err) {
    console.error(err.message);
  }
});

// update todo
app.put("/todos/:id", async (req, res) => {
  try {
    // const { id } = req.params;
    // const { description } = req.body;
    // const updateTodo = await pool.query(
    //   "UPDATE todo SET description = $1 WHERE todo_id = $2",
    //   [description, id]
    // );
    // res.json("Todo was updated");
    res.json({ status: "Not implemented" });
  } catch (err) {
    console.error(err.message);
  }
});

// delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    // const { id } = req.params;
    // const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
    //   id,
    // ]);
    // res.json("Todo was deleted");
    res.json({ status: "Not implemented" });
  } catch (err) {
    console.log(err.message);
  }
});

// listen on port 5000 and run a callback function
app.listen(5000, () => {
  console.log("server has started on port 5000");
});
