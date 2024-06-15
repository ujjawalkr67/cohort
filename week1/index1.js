// console.log("hwlle")
// var firstname="ujawal";
// var lastname="kumar"
// var greet=`goodmorning ${firstname} ${lastname}`
// console.log(greet)
// gender="female"
// if(gender="male")
//     {
//     console.log(`goodmorning ${firstname} ${lastname}`)
//     }
//     else{
//     console.log(`goodmorning female ${firstname} ${lastname}`)
        
//     }

// for(i=0;i<=1000;i++)
//     {
//         console.log(i)
//     }


// //strings
// function getlength(str)
// {
//     console.log(str);
//     console.log(str.length)
// }
// getlength("hello world")

// function findindexof(str,target)
// {
//     console.log(str);
//     console.log(str.indexOf(target))
// }
// findindexof("hwloe world world", "world")

// function getslice(str,start ,end)
// {
//     console.log(str);
//     console.log(str.slice(start,end))
// }
// getslice("hello world" ,0,5)

//NUmbers
// console.log(parseInt("42")) //string to integers
// console.log(parseInt("42px"))
// console.log(parseInt("wwdadada42px"))
// console.log(parseInt("3.4"))

// console.log(parseFloat("42px"))
// console.log(parseFloat("42"))

//class
// class Animal {
//     constructor(name,legcount,speaks)
//     {
//         this.name=name;
//         this.legcount=legcount;
//         this.speaks=speaks;
//     }
//     speak(){
//         console.log("hi there " + this.speaks)
//     }
// }

// let dog = new Animal("dog",4,"bhow bhow"); //create object
// let cat = new Animal("cat",4,"meowmoew");
// let cow = new Animal("cow",4,"mow mow");
// cat.speak() //callfunction on object

//date
const currentdate=new Date()
console.log(currentdate);
//calculate the time taken by a function to run
function calculation(n){
    let a=0;
    for(let i=0;i<n;i++)
        {
            a=a+i;
        }
        return a;
}

const beforedate=new Date();
const beforeTimeinMS=beforedate.getTime();
calculation(10000000);

const afterdate=new Date();
const afterTimeinMS=afterdate.getTime();
console.log(afterTimeinMS-beforeTimeinMS)