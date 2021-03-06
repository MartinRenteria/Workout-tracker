const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout-Tracker", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(process.env.PORT || PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
