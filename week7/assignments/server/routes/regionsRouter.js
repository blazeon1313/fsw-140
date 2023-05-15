const express = ('express');
const mysql = require('mysql2')
const regionsRouter = require('express').Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: 'propane381',
    database: 'hr'
});

regionsRouter.get("/get", (req, res) => {
    let sqlSelect = "SELECT * FROM hr.regions;";
    db.query(sqlSelect, (err, result) => {
        if(err) {
            throw (err);
        }
        console.log(result);
        return res.send(result);
    });
});

regionsRouter.post("/post", (req, res) => {
    let sql = "INSERT INTO hr.regions SET ?";
    let post = {
        REGION_ID: req.body.REGION_ID,
        REGION_NAME: req.body.REGION_NAME, 
    };
    db.query(sql, post, (err, result) => {
        if(err){
            throw (err);
        }
        console.log(result);
        return res.send(result);
    });
});

regionsRouter.put("/put", (req, res) => {
    let updateRegionId = req.body.REGION_ID;
    let updateRegionName = req.body.REGION_NAME;
    let sql = `UPDATE hr.regions SET
        REGION_ID = '${updateRegionId}',
        REGION_NAME = '${updateRegionName}'
            WHERE REGION_ID = '${req.params.REGION_ID}'`
    db.query(sql, (err, result) => {
        if(err){
            throw(err);
        }
        console.log(result);
        return res.send(result)
    }); 
});

regionsRouter.delete("/delete/:REGION_ID", (req, res) => {
    let sql = `DELETE FROM hr.regions WHERE REGION_ID = '${req.params.REGION_ID}'`
    db.query(sql, (err, result) => {
        if(err){
            throw (err);
        }
        console.log(result);
        return res.send("Successfully Removed Region!")
    });
})

module.exports = regionsRouter