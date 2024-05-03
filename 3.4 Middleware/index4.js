import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
var bandName = "";
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  // let streetName = req.body.street;
  // let petName = req.body.pet;

  res.send(`<h1>Your Band Name is: </h1>   <h1>${bandName} </h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
