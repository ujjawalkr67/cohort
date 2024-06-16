// const fs = require("fs");
// //filesysytem
// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data)
// }) //this is asynchronus file 
// console.log("hi there") //this will console first


//promises
const fs = require("fs");

//my own asynchrounus function
function ujjawalReadFiles(){
    console.log("inside ujjawal file");
    return new Promise(function (resolve){
        console.log("inside promise")
        fs.readFile("a.txt","utf-8",function(err,data){
            console.log("before resolve")    
            resolve(data)
    });
    })
}

//callback function to call
function onDone(data){
    console.log(data)
}

ujjawalReadFiles().then(onDone)