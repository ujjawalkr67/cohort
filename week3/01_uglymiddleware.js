const express= require("express");

const app =express();
//we will checck the username afrom header and if it true then give  access

app.get('/healthy-checkup' , function(req,res) {
    const username1 =req.headers.username1;
    const password=req.headers.password; 
    const kidneyid =req.query.kidneyid;
 
    if(username1 !="admin" || password != "1234")
    {
        // do something wiht kidney
        res.status(400).json({"msg":"something is wrong 1"})
        return
        }
    if(kidneyid !=1  && kidneyid !=2)
        {
            res.status(400).json({"msg":"something is wrong 2"})
        return;
        }
        res.json({
            msg:'your kidney is fine'
        })
});

app.listen(3001);