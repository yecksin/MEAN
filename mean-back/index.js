require('dotenv').config();

const express = require('express');
const corst = require('cors')

const { dbConnection } = require('./database/config')




var app = express();

dbConnection();

console.log()

//?config cors
app.use( cors() )

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.json({
    ok:true,
    msg:'Hola mundo'
  })
});

app.listen(process.env.PORT,()=>{
    console.log(`Puerto corriendo en el ${process.env.PORT}`)
})