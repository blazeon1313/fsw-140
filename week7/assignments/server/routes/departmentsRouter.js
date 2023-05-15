const express = ('express');
const mysql = require('mysql2')
const departmentsRouter = require('express').Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: 'propane381',
    database: 'hr'
});

departmentsRouter
    .get("/get", (req, res) => {
        let sqlSelect = "SELECT * FROM hr.departments;";
        db.query(sqlSelect, (err, result) => {
            if(err) {
                throw (err);
            }
            console.log(result);
            return res.send(result);
        });
    })

    .post("/post", (req, res) => {
        let sql = "INSERT INTO hr.departments SET ?";
        let post = {
            DEPARTMENT_ID: req.body.DEPARTMENT_ID,
            DEPARTMENT_NAME: req.body.DEPARTMENT_NAME,
            MANAGER_ID: req.body.MANAGER_ID,
            LOCATION_ID: req.body.LOCATION_ID
        }
        db.query(sql, post, (err, result) => {
            if(err){
                throw (err);
            }
            console.log(result);
            return res.send(result);
        });
    })

    .put("/put", (req, res) => {
        let updateDepartmentId = req.body.DEPARTMENT_ID;
        let updateDepartmentName = req.body.DEPARTMENT_NAME;
        let updateManagerID = req.body.MANAGER_ID;
        let updateLocationId = req.body.LOCATION_ID;
        let sql = `UPDATE hr.departments SET
            DEPARTMENT_ID = '${updateDepartmentId}',
            DEPARTMENT_NAME = '${updateDepartmentName}',
            MANAGER_ID = '${updateManagerID}',
            LOCATION_ID = '${updateLocationId}'
                WHERE DEPARTMENT_ID = '${req.params.DEPARTMENT_ID}'`
        db.query(sql, (err, result) => {
            if(err){
                throw(err);
            }
            console.log(result);
            return res.send(result)
        }); 
    })

    .delete("/delete/:DEPARTMENT_ID", (req, res) => {
        let sql = `DELETE FROM hr.departments WHERE DEPARTMENT_ID = '${req.params.DEPARTMENT_ID}'`
        db.query(sql, (err, result) => {
            if(err){
                throw (err);
            }
            console.log(result);
            return res.send("Successfully Removed Department!")
        });
    });

    module.exports = departmentsRouter;