
//ugly way better way is to use zod
const express = require('express')
const zod = require('zod')

const app = express();

const schema=zod.array(zod.number())
app.use(express.json());

app.post('/health-checkup',function(req,res) {
    const kidney=req.body.kidney;
    const response = schema.safeParse(kidney)
    // const kidneylength=kidney.length;
    if(!response.success){
        res.status(411).json({
            msg:"input is invalid"
        })
    }
    else{

        res.send({response})
    }

});
app.listen(3001)