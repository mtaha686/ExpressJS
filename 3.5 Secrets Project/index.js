//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var validUser = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
function getPass(req, res, next) {
  const pass = req.body["password"];
  if (pass === "error404") {
    validUser = true;
  }
  console.log(pass);
  next();
}

app.use(getPass);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (validUser) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
