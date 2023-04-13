const express = require('express');
const app =new express();
const port = 8080;
app.use(express.static('public')) //enable everthing in the folder as static file
app.listen(port, ()=>{
  console.log(`Serving photo app on http://localhost:${port}`)
});