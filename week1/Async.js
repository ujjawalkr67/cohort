// //Async Await
// //this async will return a promise it will wrap a simple string into promise and then return
// async function getdata(){
//     return "Namste";
// }

// const dataPromise=getdata();
// console.log(dataPromise);// this will be a promise 

// //to extect data from promise we will use .then
// dataPromise.then(res => {
//     console.log(res) //the data is extracted
// })

// //Another example of asyncfuntion returning a promise
// const p = new Promise ((resolve,reject)=>{
//     resolve("Promise is resolvd");
// });

// async function newdata()
// {
//     return p;
// }

// //in above the p is already a promise it willbe simply retrun by the new promise
// const newPromise = newdata();
// console.log(newPromise);
// newPromise.then(res => console.log(res));


//---------------Await keyword to resolve promise----------------
// const p = new Promise ((resolve,reject)=>{
//     resolve("Promise is resolvd");
// });

// async function handlePromise()
// {
//     const val =await p;
//     console.log(val)
// }
// handlePromise();

// ---------deep dive int async await -----------------

// const p = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise is resolvd");
//     }, 10000);
// });
// //this old way of handling promise willnot wait for 10sec at the line andwill move next line 
// //and after 10 sec execute the line 53
// function getdata(){
//     p.then((res)=> console.log(res));

//     console.log("namaste")
// }
// getdata();
// //await function will stop the code at line 61till the promise is resolved and then move to next S
// async function handlePromise()
// {
//     console.log("ujjawal")
//     const val =await p;
//     console.log("hellow11")
//     console.log(val)
// }
// handlePromise();


//----------------lets paly with async await--------------------

//int htis example async function wait for all th promise to resoled then moved
// p1 takes 10sec and p2 takes 5 sec then the when code move aftr the rsolve of p1 the p2 is also
//resolved as it takes less time thn p1
// const p1 = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise 1 is resolvd");
//     }, 10000);
// });

// const p2 = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise 2 is resolvd");
//     }, 5000);
// });
// async function handlePromise()
// {
//     console.log("ujjawal")
//     const val1 =await p1;
//     console.log("hellow11")
//     console.log(val1)

//     const val2 =await p2;
//     console.log("hellow again")
//     console.log(val2)
// }
// handlePromise();

//same example but we will reverse the time taken to see 
//in this p2 have to waitfor 5 more sec to get resolvedas p1 was only taing 5 sec 
// const p1 = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise 1 is resolvd");
//     }, 5000);
// });

// const p2 = new Promise ((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise 2 is resolvd");
//     }, 10000);
// });
// async function handlePromise()
// {
//     console.log("ujjawal")
//     const val1 =await p1;
//     console.log("hellow11")
//     console.log(val1)

//     const val2 =await p2;
//     console.log("hellow again")
//     console.log(val2)
// }
// handlePromise();

//------------Real world exmaple-------------

const API ="https://api.github.com/users/ujjawalkr67"

async function realworld(){
// { fetch() => Response.json() => jsonvalue
//how the fetch works 
//fetchis a proise that returns us a response to which we convert into json or any stirngs 
// that response.json is also a promise that  gives us th jsonvalue
   
try{
    const data= await fetch(API); 
    const jsonvalue= await data.json();
    console.log(jsonvalue)
}
catch(err){
    console.log(err);
}
}
realworld();