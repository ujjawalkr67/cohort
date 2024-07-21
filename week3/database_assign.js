

const express= require("express");
const jwt=require("jsonwebtoken");
const jwtPassword='123456';

const app=express();
app.use(express.json())

const ALL_USERS=[
    {
        username:"ujjawalkr67@gmail.com",
        password:"12123434",
        name:'Ujjawal'
    },
    {
        username:"maddy@gmail.com",
        password:"1234",
        name:'Maddy'
    },
    {
        username:"samy@gmail.com",
        password:"092309",
        name:'Sam'
    },
];

function userExists(username,password)
{
    //logic to return true or false if this user exist or not
    let userExists=false;
    for(let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password)
        {
            userExists= true;
        }
    }
    return userExists;
}

app.post('/signin',function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"user does not exits in memory"
        });
    }
    var token = jwt.sign({username:username}, jwtPassword);
    return res.json({
        token,
    });
});




app.get('/users',function(req,res){
    const token= req.headers.authorization;
    try{
        const decoded=jwt.verify(token,jwtPassword);
        const username=decoded.username;
        //return the list pf other than this username
        res.json({
            // users:ALL_USERS
            users:ALL_USERS.filter(function(value){
                if(value.username==username)
                {
                    return false;
                }
                else{
                    return true;
                }
            })
        })

    }
    catch(err)
    {
        return  res.status(403).json({
            msg:"Invalid token"
        })
    }
});

app.listen(3000);