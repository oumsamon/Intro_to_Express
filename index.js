const express = require("express")
const app = express()

// Routing

app.get('/', (request, response) => {
    response.send('Hello World')
  })

  
// Params in Express  
app.get("/:food", (req, res) => {
  res.send(`I like ${req.params.food}`);
});


app.listen(4000, () => {
  console.log("app listening on port 4000")
})