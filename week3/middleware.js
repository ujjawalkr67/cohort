const express= require("express");

const app =express();

function usermiddleware(req,res,next)
{ 
    const username1 =req.headers.username1;
    const password=req.headers.password; 
    if(username1 !="admin" || password != "1234")
    {
        res.status(403).json({msg:"incorrect input"});
    }
    else{
        next();
    }
};

function kidneymidleware(req,res,next)
{
    const kidneyid =req.query.kidneyid;
    if(kidneyid !=1  && kidneyid !=2)
    {
        res.status(403).json({msg:"u r not human"})
    }
    else{
        next();
    }
}

app.get('/healthy-checkup' ,usermiddleware,kidneymidleware, function(req,res) {
    // const username1 =req.headers.username1;
    // const password=req.headers.password; 
    // const kidneyid =req.query.kidneyid;
  res.json({ msg:'your health is fine'});
});


app.get('/kidney-checkup' ,usermiddleware,kidneymidleware, function(req,res) {
    // const username1 =req.headers.username1;
    // const password=req.headers.password; 
    // const kidneyid =req.query.kidneyid;
  res.json({ msg:'your kidney is fine'});
});

app.listen(3001);