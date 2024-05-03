import express from "express";
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  //   console.log(req.rawHeaders);
  //   res.send("Hello World!");
  res.send("<h1>Hello world how are u doing</h1>");
});

app.get("/about", (req, res) => {
  //   console.log(req.rawHeaders);
  //   res.send("Hello World!");
  res.send("<h1>About me Page</h1><p>My COnatct: +92-343-1293458</p>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
