const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");
const PORT = process.env.port || 8081;
var urlencodedparser = bodyParser.urlencoded({ extended: false });
app.use(express.static("public"));
app.use(express.json());
app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// taking form data
app.get("/myFrmData", (req, res) => {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  res.end(JSON.stringify(response));
});
app.post("/myPost", urlencodedparser, (req, res) => {
  response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  res.end(JSON.stringify(response));
});
app.post("/jsonFrm", urlencodedparser, (req, res) => {
  response = {
    first_name: req.body.json_fname,
    last_name: req.body.json_lname,
  };
  res.end(JSON.stringify(response));
});
app.listen(PORT, () => console.log(`server is running on ${PORT}`));