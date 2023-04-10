const express = require('express');
const {
	createTask,
	getTask,
	getTasks,
	deleteTask,
	updateTask,
} = require('../Controller/TaskController');

const router = express.Router();

router.route('/task').get(getTasks).post(createTask);

router
	.route('/task/:id')
	.get(getTask)
	.delete(deleteTask)
	.put(updateTask)
	.patch(updateTask);

module.exports = router;
