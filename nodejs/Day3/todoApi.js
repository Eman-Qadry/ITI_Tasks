const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const Todo=require('./todo');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost:27017/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Create a new todo
app.post("/todos", async (req, res) => {
  try {
    const { title, status } = req.body;
    const newTodo = new Todo({ title, status });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all todos 
app.get("/todos", async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const todos = await Todo.find(query);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single todo by id
app.get("/todos/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) 
        return res.status(404).json({ message: "To do not found" });

    return res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Edit a single todo by ID
app.put("/todos/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedTodo)
         return res.status(404).json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a single todo by ID
app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) 
        return res.status(404).json({ message: "Todo not found" });
    
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
