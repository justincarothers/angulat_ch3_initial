const express = require('express');
const router = express.Router();

let todos = [];

// Display the to-do list
router.get('/', (req, res) => {
  res.render('index', { todos });
});

// Add a new item to the to-do list
router.post('/add', (req, res) => {
  const { task } = req.body;
  if (task.length < 4) {
    res.redirect('/');
  } else {
    todos.push(task);
    res.redirect('/');
  }
});

// Delete an item from the to-do list
router.post('/delete', (req, res) => {
  const { index } = req.body;
  todos.splice(index, 1);
  res.redirect('/');
});

module.exports = router;
