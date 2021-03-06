const appRoot = require('app-root-path');
const users = require(appRoot+'/lib/user');
const express = require('express');
var app = express.Router();
app.get('/login',(req,res)=>{
  res.render('login',req.resdata);
})
app.get('/login/email',(req,res)=>{
  res.render('login/email',req.resdata);
})
app.get('/signup/email',(req,res)=>{
  res.render('signup/email',req.resdata);
})


app.post('/signup/email',(req,res)=>{
  users.createEmail(req.body.username,req.body.password)
  .then(()=>res.redirect('/login/email'))
  .catch((error)=>{
    console.log(error)
    throw error;
  })
  .catch(()=>res.redirect('/signup/email?error=true'))
})

module.exports= app;
