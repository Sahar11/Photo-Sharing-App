// const { response } = require('express')
const express = require('express');
const app =express();
const db = require('./models');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.static('public')) //enable everthing in the folder as static file
app.set('view engine', 'ejs');

const PhotosRouter = require('./routes/PhotosRouter');
const CommentsRouter = require('./routes/CommentsRouter');
const UsersRouter = require('./routes/UsersRouter');
app.use('/images', PhotosRouter);
app.use('/comments', CommentsRouter);
app.use('/user', UsersRouter);

app.get('/', (request, response) => {
  response.render("index");
});

//db
const sqlPort = 3307; // 3306 or 3307

// sequelize way
db.sequelize
    .sync({})
    .then(()=>{
      app.listen(sqlPort, () => {
        console.log(
          `Mariadb Connection Successful - http://localhost:${sqlPort}`
          )
      })
    })
    .catch((error)=> {
      console.error("Unable to connect to the database", error)
    })


//server
const port = 8080;
app.listen(port, ()=>{
  console.log(`Serving photo app on http://localhost:${port}`)
}); 