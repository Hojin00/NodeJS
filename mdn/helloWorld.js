var express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// callback function is called whenever there is an HTTP GET request with a path ("/")
// callback function takes req, res as an arguments and calls res.send()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});