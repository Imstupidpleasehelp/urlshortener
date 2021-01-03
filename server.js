const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))
// this is how we render the views 
app.get('/',  (req, res) => {
 
  res.render('app')
})
// the shortURL file is imported here 
app.post('/makeurl', (req, res) => {
  console.log('uyou')

   res.redirect('/')
})


app.listen(process.env.PORT || 5000);