const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet')
const cors = require('cors')
const connectDB = require('./config/database');

//load .env
require('dotenv').config();

connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

//Routes
// /api/auth/login // /api/auth/register
app.use('/api/auth', require('./routes/authRoute'));
// /api/users/profile
app.use('/api/users', require('./routes/userRoute'));
// root
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