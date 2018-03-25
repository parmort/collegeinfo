const express = require('express');

const app = express();

/* Middleware */

// Setting up template engine
app.set('views', './views');
app.set('view engine', 'pug');

// Setting up static assets
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

function title(title){
  if(title == ""){
    return [
      "Bison Info",
      "Bison Info"
    ]
  }

  return [
    "Bison Info | " + title,
    title
  ]
}

/* Routes */

// GET request to '/' route
app.get('/', (req, res) => {
  res.render('home', {title: title(""), isHome: true});
});

app.get('/academics', (req, res) => {
  res.render('academics', {title: title("Academics"), isHome: false});
});

app.get('/activities', (req, res) => {
  res.render('activities', {title: title("Activities"), isHome: false});
});

app.get('/qualities', (req, res) => {
  res.render('qualities', {title: title("Qualities"), isHome: false});
});

app.get('/athletics', (req, res) => {
  res.render('athletics', {title: title("Academics"), isHome: false});
});

app.get('/post-uni', (req, res) => {
  res.render('post-uni', {title: title("Post University"), isHome: false});
});

// Starting server
const port = 3000;
app.listen(port, () => console.log("Server Started on port " + port));
