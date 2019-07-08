var express = require('express');
var router = express.Router();
// this let us export the route later
var db = require('../models');
var helpers = require('../helper/todos');

router.route('/')
 .get(helpers.getTodos)
 .post(helpers.createTodos);

router.route('/:todoId', )
 .get(helpers.getTodo)
 .put(helpers.updateTodo)
 .delete(helpers.deleteTodo);


module.exports = router;
