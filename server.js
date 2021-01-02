const express = require('express')
const mongoose = require('mongoose')
const app = express()



app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
// this is how we render the views 
app.get('/',  (req, res) => {
 
  res.render('index')
})
// the shortURL file is not imported yet



app.listen(process.env.PORT || 5000);