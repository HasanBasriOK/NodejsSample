const express = require('express');
const app=express();
var sql = require("mssql");
const database = require('./dataAccess');

app.get('/',getFunction);


app.get('/Navigation',getFunctionNavigation);

app.listen(3000,listenFunction);


function listenFunction()
{
    console.log("running");
}

function getFunction(req,res)
{
    //return json data
    database.getBlogPromise()
    .then (result=>{
        res.send(result);
    });
}

function getFunctionNavigation(req,res)
{
    res.send("This method called using navigation")
}