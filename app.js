const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "views");

const memes = [
  {
    name: "Memes that make us smile",
    imgURL: "https://exse.eyewated.com/pict/c38cc4d7ef9a30de-1024x683.jpg",
    price: "$20.00 - $30.00",
  },
  {
    name: "Programmer memes",
    imgURL:
      "https://aprogrammerlife.com/images/pictuers/programmers_looking_at_programming_memes.jpg",
    price: "$10.00",
  },
];
app.get("/", (req, res) => {
  res.render("index", { memes });
});
app.get("/add-meme", (req, res) => {
  res.render("add-meme");
});
app.post("/memes", (req, res) => {
  let meme = {
    name: req.body.name,
    imgURL: req.body.imgURL,
    price: req.body.price,
  };
  memes.push(meme);
  res.redirect("/");
});

app.listen(3000, () => console.log("Server running on port 3000"));

module.exports = app;
