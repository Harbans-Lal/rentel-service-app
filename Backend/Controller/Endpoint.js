const {userDetail,userItem} = require("../Model/Db")

const jwt = require("jsonwebtoken")
const env = require("dotenv")
env.config()

module.exports.login = async (req, res) => {
  try {
      const validUser = await userDetail.find({ name: req.body.name, password: req.body.password });
      console.log(validUser);
      if (validUser.length <= 0) {
          res.status(401).send("Invalid credentials");
          return;
      }else{
          const token = jwt.sign({ _id: validUser[0]._id }, process.env.SECRET, {
          expiresIn: process.env.EXPIRE
      });
        res.cookie("token",token,{ httpOnly: true})
        res.status(200).json([{ id: validUser[0]._id }]); 
      return;
      }
      
  } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
  }
};


 module.exports.signUp=async(req,res)=>{

    const user= new userDetail({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    console.log(req.body)
    await user.save()
    const token=jwt.sign({_id:user._id},process.env.SECRET,{
        expiresIn:process.env.EXPIRE
    })

    res.cookie("token",token,{ httpOnly: true})
    res.redirect("http://localhost:3000/");
}

 module.exports.addItem=async(req,res)=>{
    const newItem = new userItem({
        product:req.body.pname,
        link:req.body.link,
        description:req.body.description,
        charges:req.body.price,
        duration:req.body.duration,
        quantity:req.body.quantity
    })
    await newItem.save()
    res.status(200)
    res.redirect("http://localhost:3000/")
}

 module.exports.getitems=async(req,res)=>{
    const data = await userItem.find()
    res.status(200).json({
        data
    })
}

module.exports.updateProduct =async(req, res) => {
  try {
    const updatedUser = await userItem.findByIdAndUpdate(req.body.id,req.body,{ new: true });
    res.status(200).send(updatedUser)
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports.deleteCart= async (req, res) => {
  try {
      const userId = req.body.userId;
      const productId = req.body.productId;
      let user = await userDetail.findById(userId)
      let updated = user.cart.filter((item)=>item.prodId +"" !== productId);
      console.log(updated)
        await userDetail.findByIdAndUpdate(userId, {$set:{cart:updated}})
      res.status(200).send(updated);
  } catch (error) {
      console.error("Error deleting item from cart:", error);
      res.status(500).json({ error: "Internal server error" });
  }
};

module.exports.addToCart = async (req, res) => {
  try {
      const userId = req.body.userId;
      const productId = req.body.productId;

      const user = await userDetail.findById(userId);

      const findProduct = user.cart.findIndex((item)=> item.prodId + "" === productId);
   
      if(findProduct < 0){
        user.cart.push({prodId:productId, qnt:1})   
      }
      const updatedUser = await user.save();
      if(updatedUser){
        res.status(200).json(updatedUser.cart.length)
      } else{
        res.status(404).send({status:"data already exitst"})
      }

  } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
  }
}

module.exports.singleUser=async(req,res)=>{
  try{
    const data = await userDetail.findById(req.body.id).populate("cart.prodId")
    if(data){
     res.status(200).send({data})
    }else{
      res.status(404).send("No User Found For The Provided Id")
    } 
  }catch(err){
    res.send(err)
  }
}

module.exports.getItemById=async(req,res)=>{
  try{const data = await userItem.findById(req.params.id)
  res.status(200).send(data)}catch(err){
   res.send(err)
  }
  }

  module.exports.incAndDecItem = async(req,res)=>{
    let {userId, prodId, qnt} = req.body;
    console.log(prodId)
    const user = await userDetail.findById(userId);
    console.log(user.cart[3]._id)
    const productIndex = user.cart.findIndex((item) => item._id+"" === prodId);
    console.log(productIndex)
    if(productIndex !== -1){
       user.cart[productIndex].qnt = qnt;
       await user.save();
       res.status(200).json({status:"succesfulllu updated qnuantity"})
    }else{
      res.status(404).json({status:"Opps! data not updated"})
    }
  }