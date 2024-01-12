const mongoose =require("mongoose");
const listSchema = new mongoose({
    title:{
        type: String,
        require: true,
    },
    body:{
        type:String,
        require:true,
    },
    user:[{
        type:mongoose.Types.ObjectId,
        ref:"List",
    },
],
});

module.exports= mongoose.model("List",ListSchema);