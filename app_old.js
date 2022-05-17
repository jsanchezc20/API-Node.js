const expressObj = require("express");
const appObj = expressObj();
const intPort = 3000;

function isAuthorized(req, res, next) {
	const auth = req.headers.authorization;
	if (auth == "secretpassword") {
		next();
	} else {
		res.status(401);
		res.send("Not permitted");
	}
}

appObj.get("/", (req, res) => res.send("Hello World!"));
appObj.get("/users", isAuthorized, (req, res) => {
	res.json([{
			id: 1,
			name: "User Userson",
	}]);
});

appObj.get("/products", (req, res) => {
	res.json([{
			id: 1,
			name: "The Bluest Eye"
	}]);
});

appObj.listen(intPort, () => console.log(`Example app listening on port ${intPort}`));