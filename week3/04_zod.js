
//ugly way better way is to use zod
const express = require('express')
const zod = require('zod')

const app = express();

const schema=zod.array(zod.number())
app.use(express.json());

function validateinput(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })
    const response=schema.safeParse(obj);
    console.log(response);
}

// this is valid 
validateinput({
    email:"ujju@gmail.com",
    password:"12345678"
})
//this will giveerror as it is not ture email id
validateinput({
    email:"ujjucom",
    password:"12345678"
})
app.listen(3001)