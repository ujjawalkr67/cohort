//Express
const express=require("express");
const app=express();
const port = 3000;
//This is basic expree code
//basic route
// app.get('/', (req, res) => {
// //   res.send('Hello World!')
//   res.send('<b>Hello there!<b>') //html tag

// })

//another route if we go to /ujju
app.post('/ujju', (req, res) => {
    res.send('<b>Hello ujjawaal!<b>')
  })

  app.post('/uu', (req, res) => {
    console.log(req.body) //this will give undefined;
    console.log(req.headers)
    res.send({
        msg:"2=2=4"
    })
  })
//go to locahost 3000
app.listen(port)

// ------------------------------------------Create a to do app that lets users store on the server-----------------------
