// const fs = require("fs");
// //filesysytem
// fs.readFile("a.txt","utf-8",function(err,data){
//     console.log(data)
// }) //this is asynchronus file 
// console.log("hi there") //this will console first


// //promises
// const fs = require("fs");

// //my own asynchrounus function
// function ujjawalReadFiles(){
//     console.log("inside ujjawal file");
//     return new Promise(function (resolve){
//         console.log("inside promise")
//         fs.readFile("a.txt","utf-8",function(err,data){
//             console.log("before resolve")    
//             resolve(data)
//     });
//     })
// }

// //callback function to call
// function onDone(data){
//     console.log(data)
// }

// ujjawalReadFiles().then(onDone)

// const GITHUB_API ="https://api.github.com/users/ujjawalkr67"
// const user = fetch(GITHUB_API) //fetch is a type of promise
// console.log(user)
 //attachong callback to promise 
// user.then(function(data){
//     console.log(data)
// })

// create a promise
const cart =["shoes","pants","kurta"];
const promise = createoder(cart); //orderid

promise.then(function(){
    console.log("success")
    // proceedtopayment(orderId);
})
.catch(function(err){
    console.log(err.message)
})


//code for createoders
function createoder(cart){
    const pr = new Promise(function(resolve,reject){
        //createoder
        //validatecart
        //orderid
        if(!validateCart(cart)){
            const err =new Error("cart is empty")
            reject(err);
        }
        //logic for createoder and orderid
        const orderId="1234"
        if(orderId){
            setTimeout(() => {
                
                resolve(orderId)
            }, 5000);
        }
    });
    return pr;
}
function validateCart(cart)
{
    // return true;
    return false;

}