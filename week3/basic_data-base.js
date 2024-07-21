const express= require("express");
const jwt=require("jsonwebtoken");
const jwtPassword='123456';

const app=express();
app.use(express.json())

const mongoose=require("mongoose")

//mongoose.connect('mongodb+srv://admin:EWetFQKhuQl6cmdo@cluster0.znad7af.mongodb.net/')

const User = mongoose.model('Users', { name: String ,email: String,password:String});

// const newuser = new User({ name:'Ujjawal',username:"ujjawalkr67@gmail.com",
//     password:"12123434" });

// newuser.save()

//now add the same way  or a post request

app.post('/signin', async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const existinguser=await User.findOne({email:username});
    if(existinguser){
        return res.status(400).send("Username already exist")
    }
const newuser = new User({ 
    name:name,
    username:username,
    password:password
});

newuser.save()

    return res.json({
        msg:"succefuuly sign in  "
    });
});

app.listen(3000);