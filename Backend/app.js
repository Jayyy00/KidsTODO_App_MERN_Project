const express = require("express");
const app = express();
require("./connection/conn");
const auth =require("./routes/auth");
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hellow");
});


app.use("/api/v1",auth)
app.listen(1000,()=>{
    console.log("server started");
});















//3BnzMTBkxJ0ZZ4nq