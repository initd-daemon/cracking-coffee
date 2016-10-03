const express = require('express');
var app = express.Router();
const appRoot = require('app-root-path');
const Token = require(appRoot+'/lib/tokens');
app.use('/order',require('./order'))
app.get('/',(req,res)=>{
  res.render('account/index',{user:req.user});
})
app.get('/logout',(req,res)=>{
  Promise.resolve()
    .then(()=>{
      if(req.cookies.rememberme){
        return Token.get(req.cookies.rememberme).then((token)=>token.delete())
      }
    })
    .catch(()=>{
    })
    .then(()=>{
      res.clearCookie('rememberme')
      req.logout()
      res.redirect('/')
    })
})
module.exports= app;
