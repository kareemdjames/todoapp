const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
//Init app
const app = express();
// specify port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//routes
app.get('/', function (req, res) {
  res.send('Hello World')
});

