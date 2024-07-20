
//ugly way better way is to use zod
const express = require('express')
const app = express();
app.use(express.json());

app.post('/health-checkup',function(req,res) {
    const kidney=req.body.kidney;
    const kidneylength=kidney.length;
    res.send("Your kidney length is" + kidneylength)
});
app.listen(3001)