const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(express.static(__dirname + '/public'));
// this is how we render the views 
app.get('/',  (req, res) => {
 
  res.render('index')
})
// the URL file is imported here 
app.post('/makeurl', (req, res) => {
  console.log('uaaaa')

   res.redirect('/')
})


app.listen(process.env.PORT || 5000);