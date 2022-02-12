var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.json({
    ok:true,
    msg:'Hola mundo'
  })
});

app.listen(3000,()=>{
    console.log("Puerto corriendo en el 3000")
})