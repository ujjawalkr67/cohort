// create a promise
const cart =["shoes","pants","kurta"];
createoder(cart) //orderid
.then(function(orderId){
    console.log(orderId)
    // proceedtopayment(orderId);
    return orderId;

})
.then(function(orderId){
    return proceedtopayment(orderId);
    
})
.then(function(paymentinfo){
    console.log(paymentinfo)
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
    return true;
    // return false;

}
function proceedtopayment(orderId)
{
    return new Promise(function(resolve,reject){
        resolve("payment successful")
    })
}