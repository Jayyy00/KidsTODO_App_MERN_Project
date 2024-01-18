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


//Sign IN
router.post("/signin",async(req,res)=>{
  try{
    const user = await User.findOne({email:req.body.email});
    //Check if the user already exists
  

    if (!user) {
      res.status(400).json({ message: "Please Sing Up First" });
    }
    
    const ispasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
      );
      if (!ispasswordCorrect) {
        res.status(400).json({ message: "Password Is Not Correct" });
      }
      const{password,...others}= user._doc;
      res.status(200).json({others});
  }catch(error){
    //console.log(error);
    res.status(400).json({message:"User Alredy Exists"});
}
});


module.exports = router;