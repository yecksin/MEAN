require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config')




var app = express();

dbConnection();

console.log()

//?config cors
app.use( cors() )


//? lectura y parseo del body //! el orden es importante
app.use(express.json())

// respond with "hello world" when a GET request is made to the homepage
app.use('/api/usuarios', require('./routes/usuarios.route'));
app.use('/api/hospitales', require('./routes/hospitales.route'));
app.use('/api/login', require('./routes/auth.route'));

app.listen(process.env.PORT,()=>{
    console.log(`Puerto corriendo en el ${process.env.PORT}`)
})