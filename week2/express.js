
// const express=require("express");

// const app=express();
// function sum(n)
// {
//      let ans=0;
//      for (let i=0;i<=n;i++)
//         {
//             ans=ans+i;
//         }
//         return ans;
// }  

// app.get("/",function(req,res){
//     // res.send("hi there")
//     const n= req.query.n;// to recieve the query param form the user
//     const ans=sum(n);
//     res.send("hi ur ans is " + ans)
// })

// app.listen(3001);


///------------creating  more complicated http servers----------------------------------

//Your logic is like a doctor
//request methods
//1.get= going for a consulattion to get a check up
//2.post-goin to geta new kidnet inserted
//3.put-going to get a kidney replaced
//4.delete-going to get  a kidney removed

//create a array of object for storing user informaton
const express=require("express");

const app=express();

app.use(express.json()); //to parse json body in server

const users=[{
    name:"ujjawal",
    kidneys:[{
        healthy:false
    }]
}]


//req,res=> request and response
//query prara for get requqst
app.get("/",function(req,res){
    const ujjukidney=users[0].kidneys;
    const numberofkidney=ujjukidney.length;
    let noofhelahtykidney=0;
    for(let i=0;i<ujjukidney.length;i++)
        {
            if(ujjukidney[i].healthy)
                {
                    noofhelahtykidney=noofhelahtykidney + 1;
                }
        }
    const noofunhealthykidney= numberofkidney - noofhelahtykidney;
    res.json({
        numberofkidney,
        noofhelahtykidney,
        noofunhealthykidney
    })
})

//ittakesbodyfrom user
app.post("/",function(req,res){
    const ishealtthy=req.body.ishealthy;
    users[0].kidneys.push({
        healthy:ishealtthy
    })
    res.json({
        msg:"done"
    })
})

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++)
        {
            users[0].kidneys[i].healthy=true;
        }
        res.json({
            msg:"done"
        })
})

function istherebadkidney()
{
    const badkidney=false;
     for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy)
            {
                badkidney=true;
            }
     }
     return badkidney;
}
//to remove unhealthy kidney
app.delete("/",function(req,res){

//cjeck if there any unheakthy kidney then to dlelte 
///ohterwise statsu 411
if(istherebadkidney())
    {   
     const newkidneys=[];
     for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy)
            {
                newkidneys.push({
                    healthy:true
                })
            }
     }
     users[0].kidneys=newkidneys;
     res.json({msg:"ok"})
    }
else{
 res.status(411).json({
    msg:"you have no badkidneys"
 })
}
})


app.listen(3001);