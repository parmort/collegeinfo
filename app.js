const express = require('express');

const app = express();

/* Middleware */

// Setting up template engine
app.set('views', './views');
app.set('view engine', 'pug');

// Setting up the CSS folder
app.use("/css", express.static(__dirname + "/css"));

/* Routes */

// GET request to '/' route
app.get('/', (req, res) => {
  res.render('home', {title: "Temp Home"});
});

// Starting server
const port = 3000;
app.listen(port, () => console.log("Server Started on port " + port));
