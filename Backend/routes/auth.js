const router = require("express").Router();
const User =require("../models/user");
const bcrypt=require("bcryptjs")
//SING IN 
router.post("/register",async(req,res)=>{
    try{
      const{ email, username, password, }=req.body;
      const hashpassword= bcrypt.hashSync(password,);
      //Check if the user already exists
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });

      if (existingUser) {
        return res.status(400).json({ message: "User Already Exists" });
      }
      const user = new User({email, username, password:hashpassword }); 
      await user.save().then(()=>res.status(200).json({user:user}));
    }catch(error){
      console.log(error);
      res.status(500).json({message:"Internal Server Error"});
}
});


//LOG IN

module.exports = router;