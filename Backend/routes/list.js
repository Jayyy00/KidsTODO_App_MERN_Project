const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//Create
router.post("/addTask",async(req,res) => {
   try {
    const{title, body, email}= req.body;
   const existingUser= await User.findOne({email});
   if(existingUser)
   {
    const list = new List({title,body,user:existingUser});
    await list.save().then(()=>res.status(200).json({list}));
    existingUser.list.push(list);
    existingUser.save();
   }
   } catch (error) {
         console.log(error);
   }
});

//Update
router.put("/updateTask/:id",async(req,res) => {
      try {
       const{title, body, email}= req.body;
      const existingUser= await User.findOne({email});
      if(existingUser)
      {

          const list= await List.findByIdAndUpdate(req.params.id,{title,body});
          list.save().then(()=>res.status(200).json({message:"Task Updated!!"}));
       
      }

      } catch (error) {
            console.log(error);
      }
   });

//Delete
router.delete("/deleteTask/:id",async(req,res) => {
      try {
       const{email}= req.body;
      const existingUser= await User.findOneAndUpdate(
            {email},
            {$pull:{list:req.params.id}}
            );
      if(existingUser)
      {

           await List.findByIdAndDelete(req.params.id).then(() =>
           res.status(200).json({message:"Task Deletd!!"})
           );
       
      }

      } catch (error) {
            console.log(error);
      }
   });

   
  // Get task
router.get("/getTasks/:id", async (req, res) => {
      try {
          const lists = await List.find({ user: req.params.id }).exec();
          res.status(200).json({ lists });
      } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Internal Server Error" });
      }
  });
   
  //all task
  router.get("/getAllTasks", async (req, res) => {
      try {
          const allLists = await List.find().exec();
          res.status(200).json({ lists: allLists });
      } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Internal Server Error" });
      }
  });
  

module.exports= router;