/* const express = require('express')
const conectarDB = require('./config/db')
const mysql = require ('mysql')
const myconn = require('express-myconnection')
const routes = require ('./routes')
const app = express()
 

conectarDB();



//routes ------------- --------------------------------
app.get('/', (req,res)=>{
    res.send('Bienvenido a mi API ')
})
app.use('/alumnos',routes)




 //servidor corriendo ------------------------------------
app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo en el puerto', app.get('port'))
}) */