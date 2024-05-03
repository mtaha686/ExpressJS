import express from "express";

const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   console.log(req.method);
//   next();
// });

function logger(req, res, next) {
  console.log("Request method", req.mothod);
  console.log("Req URl", req.url);
}
app.use(logger);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
