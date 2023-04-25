// const { response } = require('express')
const express = require('express');
const app =express();
const db = require('./models');
const bodyParser = require('body-parser');

app.use(express.static('public')) //enable everthing in the folder as static file
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.render("index");
});

//db
const sqlPort = 3307; // 3306 or 3307

// sequelize way

//traditional sql way
// app.listen(sqlPort, () => {
//   console.log(`Mariadb Connection Successful - http://localhost:${sqlPort}`)
// })

//server
const port = 8080;
app.listen(port, ()=>{
  console.log(`Serving photo app on http://localhost:${port}`)
}); 