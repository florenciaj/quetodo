// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoute = require('./Route/TaskRoute');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', taskRoute);

// routes
app.get('/', (req, res) => {
	res.send('home page');
});

const { PORT } = process.env;

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`server running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
