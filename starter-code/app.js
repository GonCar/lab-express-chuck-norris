const express = require('express');
const app = express();
const Chuck  = require('chucknorris-io');
const client = new Chuck();

app.set ("views", __dirname + "/views");

app.set ("view engine", "ejs");
app.listen(3000, () => console.log("Listening to port 3000"));
app.get("/", (req, res, next) => {
  res.render ("index");
});

app.get("/random", (req, res, next) => {
  let randomJoke = client.getRandomJoke()
    .then((response) => {
      console.log(response);
      res.render ("index", {
        randomJoke: response
      });
    }).catch((err) => {
      // handle error
    });


  // Retrieve a random chuck joke
});

app.get("/categories", (req, res, next) => {
  res.render ("index");
});

app.get("/search", (req, res, next) => {
  res.render ("index");
});
