require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config')




var app = express();

dbConnection();

console.log()

//?config cors
app.use( cors() )

// respond with "hello world" when a GET request is made to the homepage
app.use('/api/usuarios', require('./routes/usuarios.route'));


app.listen(process.env.PORT,()=>{
    console.log(`Puerto corriendo en el ${process.env.PORT}`)
})