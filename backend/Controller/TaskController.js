const Task = require('../Model/TaskModel');

const getTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(200).json(tasks);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const getTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findById(id);

		if (task) {
			res.status(200).json(task);
		} else {
			res.status(404).json(`No task with id ${id} found`);
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const createTask = async (req, res) => {
	try {
		const task = await Task.create(req.body);
		res.status(200).json(task);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findByIdAndDelete(id);

		if (task) {
			res.status(200).json({ message: 'task deleted' });
		} else {
			res.status(404).json(`No task with id ${id} found`);
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
			new: true,
			runValidators: true,
		});

		if (task) {
			res.status(200).json({ message: 'task updated' });
		} else {
			res.status(404).json(`No task with id ${id} found`);
		}
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getTasks,
	getTask,
	createTask,
	deleteTask,
	updateTask,
};
