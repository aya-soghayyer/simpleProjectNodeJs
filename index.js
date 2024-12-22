const express = require("express")
const app = express();
app.use(express.json())

app.get("/name",(req,res)=>{
res.send("Aya Soghayyer"); 
console.log("Aya Soghayyer")
})



app.listen(3000,()=>{
    console.log("listen on port 3000");
})