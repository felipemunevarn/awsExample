const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const { log } = require('console');

// intialize
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(require('./routes/index'))
app.use(require('./routes/users'))

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
