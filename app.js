const express = require('express');
const {
  createTasks,
  getTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
} = require('./controllers/tasksController');

const app = express();
app.use(express.json());

app.post('/tasks', createTasks);
app.get('/tasks', getTasks);
app.get('/tasks/:id', getTaskById);
app.patch('/tasks/:id', updateTaskById);
app.delete('/tasks/:id', deleteTaskById);

module.exports = app;
