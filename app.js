const express = require('express');
var mysql = require('mysql2');

var conexion = mysql.createConnection({
    host: 'localhost',
    port:3307,
    database:'arriendos_onlinedb',
    user:'root',
    password:'4rr13nd0s0nl1n3123'
});

conexion.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('conexion exitosa');
    }
})