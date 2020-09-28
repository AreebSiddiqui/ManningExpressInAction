// const knex = require("knex");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config.json");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

//configurations
const knex = require("knex")({
	client: "mysql",
	connection: {
		host: "109.203.112.33",
		user: "amir",
		password: "%3p4br3X",
		database: "userknexjs",
	},
	migrations: {
		tableName: "user_details",
	},
	pool: {
		min: 0,
		max: 7,
	},
});

app.get("/users", (req, res) => {
	knex
		.select("*")
		.from("user_details")
		.then(function (rows) {
			res.json(rows);
		})
		.then((results) => {
			res.json(results.rows);
		})
		.catch((err) => {
			console.log(err);
		});
});

app.listen(PORT, console.log(`App started on ${PORT}!!!`));
