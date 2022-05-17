const express = require("express");
const app = express();
const intPort = 3000;
const { User } = require("./models");

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/users", isAuthorized, async (req, res) => {
	const users = await User.findAll();
	
	res.json(JSON.stringify(users));
	
	console.log(users.every(user => user instanceof User));
	console.log("All users:", JSON.stringify(users, null, 2));
});

app.get("/products", (req, res) => {
	res.json([{
			id: 1,
			name: "The Bluest Eye"
	}]);
});

function isAuthorized(req, res, next) {
	const auth = req.headers.authorization;
	if (auth == "secretpassword") {
		next();
	} else {
		res.status(401);
		res.send("Not permitted");
	}
}

app.listen(intPort, () => console.log(`Example app listening on port ${intPort}`));