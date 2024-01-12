const mongoose = require("mongoose");
const conn = async(req,res)=>{
 try{
    await mongoose
    .connect(
        "mongodb+srv://admin:3BnzMTBkxJ0ZZ4nq@cluster0.qd3p1sq.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(()=>{
       console.log("Connected");
    });
 } catch(error){
    res.status(400).json({
        message:"Not Connected",
    });
 }
};
conn();

//await mongoose.connect("mongodb+srv://admin:3BnzMTBkxJ0ZZ4nq@cluster0.qd3p1sq.mongodb.net/?retryWrites=true&w=majority")
//console.log("Connected");