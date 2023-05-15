const express = ('express');
const mysql = require('mysql2')
const employeesRouter = require('express').Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: 'propane381',
    database: 'hr'
});

employeesRouter.get("/get", (req, res) => {
    let sqlSelect = "SELECT * FROM hr.employees;";
    db.query(sqlSelect, (err, result) => {
        if(err) {
            throw (err);
        }
        console.log(result);
        return res.send(result);
    });
});

employeesRouter.post("employees/post", (req, res) => {
    let sql = "INSERT INTO hr.employees SET ?";
    let post = {
        EMPLOYEE_ID: req.body.EMPLOYEE_ID,
        FIRST_NAME: req.body.FIRST_NAME,
        LAST_NAME: req.body.LAST_NAME,
        EMAIL: req.body.EMAIL,
        PHONE_NUMBER: req.body.PHONE_NUMBER,
        HIRE_DATE: req.body.HIRE_DATE,
        JOB_ID: req.body.JOB_ID,
        SALARY: req.body.MAX_SALARY,
        COMMISSION_PCT: req.body.COMMISSION_PCT,
        MANAGER_ID: req.body.MANAGER_ID,
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

employeesRouter.put("employees/put", (req, res) => {
    let updateEmployeeId =  req.body.EMPLOYEE_ID
    let updateFirstName = req.body.FIRST_NAME
    let updateLastName = req.body.LAST_NAME
    let updateEmail = req.body.EMAIL
    let updatePhoneNumber =  req.body.PHONE_NUMBER
    let updateHireDate = req.body.HIRE_DATE
    let updateJobId =  req.body.JOB_ID
    let updateSalary =  req.body.SALARY
    let updateCommissionPct =  req.body.COMMISSION_PCT
    let updateManagerId = req.body.MANAGER_ID
    let updateDepartmentId = req.body.DEPARTMENT_ID
    let sql = `UPDATE hr.employees SET
        EMPLOYEE_ID = '${updateEmployeeId}',
        FIRST_NAME = '${updateFirstName}',
        LAST_NAME = '${updateLastName}',
        EMAIL = '${updateEmail}',
        PHONE_NUMBER = '${updatePhoneNumber}',
        HIRE_DATE = '${updateHireDate}',
        JOB_ID = '${updateJobId}',
        Salary = '${updateSalary}',
        COMMISSION_PCT = '${updateCommissionPct}',
        MANAGER_ID = '${updateManagerId}',
        DEPARTMENT_ID = '${updateDepartmentId}'
            WHERE JOB_ID = '${req.params.Employee_ID}'`
    db.query(sql, (err, result) => {
        if(err){
            throw(err);
        }
        console.log(result);
        return res.send(result)
    }); 
});

employeesRouter.delete("/delete/:EMPLOYEE_ID", (req, res) => {
    let sql = `DELETE FROM hr.employees WHERE EMPLOYEE_ID = '${req.params.EMPLOYEE_ID}'`
    db.query(sql, (err, result) => {
        if(err){
            throw (err);
        }
        console.log(result);
        return res.send("Successfully Removed Employee!")
    });
})

module.exports = employeesRouter