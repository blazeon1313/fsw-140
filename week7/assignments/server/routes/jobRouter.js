const express = ('express');
const mysql = require('mysql2')
//const jobRouter = express.Router();
const jobRouter = require('express').Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: 'propane381',
    database: 'hr'
});

jobRouter
    .get("/get", (req, res) => {
        let sqlSelect = "SELECT * FROM hr.jobs;";
        db.query(sqlSelect, (err, result) => {
            if(err) {
                throw (err);
            }
            console.log(result);
            return res.send(result);
        });
    })

    .post("/post", (req, res) => {
        let sql = "INSERT INTO hr.jobs SET ?";
        let post = {
            JOB_ID: req.body.JOB_ID,
            JOB_TITLE: req.body.JOB_TITLE,
            MIN_SALARY: req.body.MIN_SALARY,
            MAX_SALARY: req.body.MAX_SALARY 
        };
        db.query(sql, post, (err, result) => {
            if(err){
                throw (err);
            }
            console.log(result);
            return res.send(result);
        });
    })

    .put("/put", (req, res) => {
        let updateJobId = req.body.JOB_ID;
        let updateJobTitle = req.body.JOB_TITLE;
        let updateMinSalary = req.body.MIN_SALARY;
        let updateMaxSalary = req.body.MAX_SALARY;
        let sql = `UPDATE hr.jobs SET
            JOB_ID = '${updateJobId}',
            JOB_TITLE = '${updateJobTitle}',
            MIN_SALARY = '${updateMinSalary}',
            MAX_SALARY = '${updateMaxSalary}'
                WHERE JOB_ID = '${req.params.JOB_ID}'`
        db.query(sql, (err, result) => {
            if(err){
                throw(err);
            }
            console.log(result);
            return res.send(result)
        }); 
    })

.delete("/delete/:JOB_ID", (req, res) => {
    let sql = `DELETE FROM hr.jobs WHERE JOB_ID = '${req.params.JOB_ID}'`
    db.query(sql, (err, result) => {
        if(err){
            throw (err);
        }
        console.log(result);
        return res.send("Successfully Removed JOB!")
    });
})

module.exports = jobRouter;