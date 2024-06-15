// const users='{"name": "ujjawal","age":24,"gender":"male"}'

// //Json.parse it converts the string into object structure
// //Json.stringify it conver the objesct into stings
// console.log(users)
// const user =JSON.parse(users);
// console.log(user)
// console.log(user["gender"])


// const naw ={
//     name:"maddy",
//     gender:"male"
// };
// console.log(naw)
// const finalstring =JSON.stringify(naw)
// console.log(finalstring)




const obj   ={
    name:"maddy",
    gender:"male"
};
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
console.log(obj.hasOwnProperty("name")) 

let newobj=Object.assign({},obj,{newproperty:"newvalue"});
console.log(newobj)


