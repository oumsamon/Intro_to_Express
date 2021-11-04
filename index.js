const express = require("express")
const app = express()

//using hbs in express

app.set('view engine', 'hbs')

// Routing

app.get('/', (request, response) => {
    response.send('Hello World')
  })


// Params in Express  
app.get("/:food", (req, res) => {
  res.send(`I like ${req.params.food}`);
});

//using hbs below to match files in views
app.get('/:name', function(req, res) {
    res.render('index', { name: req.params.name })
  })


app.listen(4000, () => {
  console.log("app listening on port 4000")
})