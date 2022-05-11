const expressObj = require("express");
const appObj = expressObj();
const intPort = 3000;

appObj.get("/", (req, res) => res.send("Hello World!"));
appObj.get("/products", (req, res) => {
	const products = [
		{
			id: 1,
			name: "hammer",
		},
		{
			id: 2,
			name: "screwdriver",
		},
		{
			id: 3,
			name: "wrench",
		}, // <- Em sembla que aquesta coma sobra
	];
	res.json(products);
});

appObj.listen(intPort, () => console.log(`Example app listening on port ${intPort}`));