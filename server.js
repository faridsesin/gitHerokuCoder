const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('SERVIDOR CON GIT')
})
app.get('/prueba',(req,res)=>{
    console.log('prueba heroku')
})

app.listen(8080,()=>{
    console.log('Escuchando al puerto 8080')
})