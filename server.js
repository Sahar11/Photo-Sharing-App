// const { response } = require('express')
const express = require('express');
const app =express();
const port = 8080;
app.use(express.static('public')) //enable everthing in the folder as static file
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.render("index")
});

app.listen(port, ()=>{
  console.log(`Serving photo app on http://localhost:${port}`)
}); 