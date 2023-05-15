const express = ('express');
const mysql = require('mysql2')
const countriesRouter = require('express').Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: 'propane381',
    database: 'hr'
});

countriesRouter
    .get("/get", (req, res) => {
        db.query("SELECT * FROM hr.countries;", (err, result) => {
            if(err) {
                throw (err);
            }
            console.log(result);
            return res.send(result);
        });
    })

    .post("/post", (req, res) => {
        let post = {
            COUNTRY_ID: req.body.COUNTRY_ID,
            COUNTRY_NAME: req.body.COUNTRY_NAME,
            REGION_ID: req.body.REGION_ID
        };
        db.query("INSERT INTO hr.countries SET ?", post, (err, result) => {
            if(err){
                throw (err);
            }
            console.log(result);
            return res.send(result);
        });
    })

    .put("/put", (req, res) => {
        let updateCountryId = req.body.COUNTRY_ID;
        let updateCountryName = req.body.COUNTRY_NAME;
        let updateRegionId = req.body.REGION_ID;
        let sql = `UPDATE hr.countries SET
            COUNTRY_ID = '${updateCountryId}',
            COUNTRY_NAME = '${updateCountryName}',
            MAX_SALARY = '${updateRegionId}'
                WHERE COUNTRY_ID = '${req.params.COUNTRY_ID}'`
        db.query(sql, (err, result) => {
            if(err){
                throw(err);
            }
            console.log(result);
            return res.send(result)
        }); 
    })

    .delete("/delete/:COUNTRY_ID", (req, res) => {
        let sql = `DELETE FROM hr.jobs WHERE COUNTRY_ID = '${req.params.COUNTRY_ID}'`
        db.query(sql, (err, result) => {
            if(err){
                throw (err);
            }
            console.log(result);
            return res.send("Successfully Removed JOB!")
        });
    });

module.exports = countriesRouter