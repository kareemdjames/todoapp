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
//setting up ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//routes
app.get('/', (req, res) => {
  res.render('index');
});

const todosRoutes = require('./routes/routes');
app.use('/todos', todosRoutes);

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

