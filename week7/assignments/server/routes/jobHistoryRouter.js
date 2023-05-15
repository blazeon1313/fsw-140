const express = ('express');
const mysql = require('mysql2')
const jobHistoryRouter = require('express').Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: 'propane381',
    database: 'hr'
});

jobHistoryRouter.get("/get", (req, res) => {
    let sqlSelect = "SELECT * FROM hr.job_history;";
    db.query(sqlSelect, (err, result) => {
        if(err) {
            throw (err);
        }
        console.log(result);
        return res.send(result);
    });
});

jobHistoryRouter.post("/post", (req, res) => {
    let sql = "INSERT INTO hr.job_history SET ?";
    let post = {
        EMPLOYEE_ID: req.body.EMPLOYEE_ID,
        START_DATE: req.body.START_DATE,
        END_DATE: req.body.END_DATE,
        JOB_ID: req.body.JOB_ID,
        DEPARTMENT_ID: req.body.DEPARTMENT_ID 
    };
    db.query(sql, post, (err, result) => {
        if(err){
            throw (err);
        }
        console.log(result);
        return res.send(result);
    });
});

jobHistoryRouter.put("/put", (req, res) => {
    let updateEmployeeId = req.body.EMPLOYEE_ID;
    let updateStartDate = req.body.START_DATE;
    let updateEndDate = req.body.END_DATE;
    let updateJobId = req.body.JOB_ID;
    let updateDepartmentId = req.body.DEPARTMENT_ID;
    let sql = `UPDATE hr.job_history SET
        EMPLOYEE_ID = '${updateEmployeeId}',
        START_DATE = '${updateStartDate}',
        END_DATE = '${updateEndDate}',
        JOB_ID = '${updateJobId}',
        DEPARTMENT_ID = '${updateDepartmentId}'
            WHERE EMPLOYEE_ID = '${req.params.EMPLOYEE_ID}'`
    db.query(sql, (err, result) => {
        if(err){
            throw(err);
        }
        console.log(result);
        return res.send(result)
    }); 
});

jobHistoryRouter.delete("/delete/:EMPLOYEE_ID", (req, res) => {
    let sql = `DELETE FROM hr.job_history WHERE EMPLOYEE_ID = '${req.params.EMPLOYEE_ID}'`
    db.query(sql, (err, result) => {
        if(err){
            throw (err);
        }
        console.log(result);
        return res.send("Successfully Removed JOB History!")
    });
})

module.exports = jobHistoryRouter