const express= require("express");
const app =express();
//we will checck the username afrom header and if it true then give  access

app.get('/heathy-checkups' , function(res,req) {
    const username=req.headers.username;
    const password=req.headers.password; 
    const kidneyid =req.query.kidneyid;

    if(username !="admin" && password != "1234")
    {
        // do something wiht kidney
        res.status(400).json({"msg":"something is wrong"})
        return;
        }
    if(kidneyid !=1  && kidneyid !=2)
        {
            res.status(400).json({"msg":"something is wrong"})
        return;
        }
        res.json({
            msg:'your kidney is fine'
        })
});

app.listen(3001);