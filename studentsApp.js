// Script de l'exercici studentsApp.js
const express = require("express"); 	// Importació de la llibrería d'express
const app = express();					// Instància de la classe express
const intPort = 3000;					// Port de les comunicacions
const { Student } = require("./models");// Instància del model

/*	Amb el verb "get" fem una petició per demanar les dades,
	abans executarà la funció que fa de middleware (intermediari) */

app.get("/students", printDateTimeRequest, async (req, res) => {
    const students = await Student.findAll();

    res.json(students);
});

/*	Imprimeix per consola el missatege amb la data i 
	l'hora i continua amb l'execució amb el mètode next() */
function printDateTimeRequest(req, res, next) {
    let dateNow = new Date();

    dateNowFormatted = "" +
    dateNow.getDate().toString().padStart(2, '0') + "/" +
    (dateNow.getMonth()+1).toString().padStart(2, '0') + "/" +
    dateNow.getFullYear().toString().padStart(4, '0') + " a les " +
    dateNow.getHours().toString().padStart(2, '0') + ":" +
    dateNow.getMinutes().toString().padStart(2, '0');

    console.log(`S'han demanat els estudiants el ${dateNowFormatted}`);

    next();
}

app.listen(intPort, () => console.log(`Example app listening on port ${intPort}`));