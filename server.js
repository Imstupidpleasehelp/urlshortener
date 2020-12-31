const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require('./models/shorturl')
mongoose.connect('mongodb://localhost/urlShort', {
useNewUrlParser: true, useUnifiedTopology:true
}) 
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/shortUrls", (req, res) => {
    
});
app.listen(process.env.PORT || 5000);
