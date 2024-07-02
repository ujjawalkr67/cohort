//Express
const express=require("express");
const app=express();
const port = 3000;
//This is basic expree code
//basic route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//another route if we go to /ujju
app.get('/ujju', (req, res) => {
    res.send('Hello ujjawaal!')
  })
//go to locahost 3000
app.listen(port)