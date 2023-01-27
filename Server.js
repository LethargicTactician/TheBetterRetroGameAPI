var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const {initialize} = require('express-openapi');
const swaggerUi = require('swagger-ui-express');

initialize({
  app,
    apiDoc: require("./api/apiDoc"),
    paths: "./api/paths"

});

app.use(
  "/apiDocs",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions:{
      url:"http://localhost:3000/apiDoc"
    }
  })
 );

 const port = process.env.port ||3051;
app.listen(port, () => console.log("Listening on port: " + port));

module.exports = app;
