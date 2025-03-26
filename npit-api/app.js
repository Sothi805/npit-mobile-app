const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/database');

//load .env
require('dotenv').config();

connectDB();

const app = express();

//Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;
const NODE_TYPE = process.env.NODE_ENV;

//logging
if(NODE_TYPE === 'development'){
    app.use(morgan('dev'));
}

app.listen(
    PORT, 
    () => console.log(`Server is running in ${NODE_TYPE} mode on port ${PORT}`)
);