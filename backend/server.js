// eslint-disable-next-line no-unused-vars
const cors = require("cors");
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskRoute = require('./Route/TaskRoute');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
	origin: ["http://localhost:3000"]
}));
app.use('/api', taskRoute);


// routes
app.get('/', (req, res) => {
	res.send('backenda');
});

const { PORT } = process.env;

mongoose
	.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => {
		app.listen(PORT, () => {
			console.log(`server running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
