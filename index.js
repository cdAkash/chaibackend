require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('Twitter hu bhai')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Please Login at chai aur code</h1>')
})

app.get('/GT650',(req,res)=>{
  res.send('<h1>Tera bhai GT lega</h1>')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})


