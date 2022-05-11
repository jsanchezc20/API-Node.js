const expressObj = require("express");
const appObj = expressObj();
const intPort = 3000;

appObj.get("/", (req, res) => res.send("Hello World!"));
appObj.listen(intPort, () => console.log(`Example app listening on port ${intPort}`));