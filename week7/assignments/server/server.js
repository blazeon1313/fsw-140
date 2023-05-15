const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const morgan = require('morgan')
const mysql = require('mysql2')
const cors = require('cors')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: 'propane381',
    database: 'hr'
});

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connection to database success')
});

app.use('/jobs', require('./routes/jobRouter.js'))
app.use('/countries', require('./routes/countriesRouter'))
app.use('/departments', require('./routes/departmentsRouter'))
app.use('/employees', require('./routes/employeesRouter'))
app.use('/history', require('./routes/jobHistoryRouter'))
app.use('/locations', require('./routes/locationsRouter'))
app.use('/regions', require('./routes/regionsRouter'))



app.listen(9000, () => {
    console.log("connected to server on port 9000")
})