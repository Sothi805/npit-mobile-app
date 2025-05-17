const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/database');

// load .env
require('dotenv').config();

connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

// logging (only in dev mode)
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// routes
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/users', require('./routes/userRoute'));
app.use('/', require('./routes/index'));

// college management routes
app.use('/api/departments', require('./routes/departmentRoute'));
app.use('/api/majors', require('./routes/majorRoute'));
app.use('/api/classes', require('./routes/classRoute'));
app.use('/api/students', require('./routes/studentRoute'));
app.use('/api/instructors', require('./routes/instructorRoute'));
app.use('/api/subjects', require('./routes/subjectRoute'));
app.use('/api/schedules', require('./routes/scheduleRoute'));
app.use('/api/scores', require('./routes/scoreRoute'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
