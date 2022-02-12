var express = require('express');
const { dbConnection } = require('./database/config')
require('dotenv').config();



var app = express();

dbConnection();

console.log()


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