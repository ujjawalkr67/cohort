// //Promise.all()
// const p1= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("p1,success");
//     }, 3000);
// })

// const p2= new Promise((resolve,reject)=>{
//     // setTimeout(() => {
//     //     resolve("p2,success");
//     // }, 1000);
//     setTimeout(() => {
//         reject("p3,fail");
//     }, 1000);
// })
// const p3= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("p3,success");
//     }, 5000);
// })

// Promise.all([p1,p2,p3]).then(res=> {
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err)
// })

//i n the same way we can practise more of a;llsettled and race()or any()

//Promise.allsettled
// const p1= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("p1,success");
//     }, 3000);
// })

// const p2= new Promise((resolve,reject)=>{
//     // setTimeout(() => {
//     //     resolve("p2,success");
//     // }, 1000);
//     setTimeout(() => {
//         reject("p3,fail");
//     }, 1000);
// })
// const p3= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("p3,success");
//     }, 5000);
// })

// Promise.allSettled([p1,p2,p3]).then(res=> {
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err)
// })

//promise.race()

// const p1= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("p1,success");
//     }, 3000);
// })

// const p2= new Promise((resolve,reject)=>{
//     // setTimeout(() => {
//     //     resolve("p2,success");
//     // }, 1000);
//     setTimeout(() => {
//         reject("p2,fail");
//     }, 1000);
// })
// const p3= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("p3,success");
//     }, 5000);
// })

// Promise.race([p1,p2,p3]).then(res=> {
//     console.log(res);
// })
// .catch((err)=>{
//     console.error(err)
// })

//promise.any()
//Promise.all()
const p1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p1,success");
    }, 3000);
})

const p2= new Promise((resolve,reject)=>{
    // setTimeout(() => {
    //     resolve("p2,success");
    // }, 1000);
    setTimeout(() => {
        reject("p3,fail");
    }, 1000);
})
const p3= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("p3,success");
    }, 5000);
})

Promise.any([p1,p2,p3]).then(res=> {
    console.log(res);
})
.catch((err)=>{
    console.error(err)
})