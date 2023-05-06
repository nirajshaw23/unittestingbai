const express = require('express');
const port =  8080;
const app =express();

app.use('/user',require('./route/users'))


// app.get('/',(req,resp)=>{
// resp.send("hello")
// })

module.exports = app.listen(port,()=>{
console.log('App is listenning at http://localhost:${port}')
})