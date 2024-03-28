const express = require("express");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const envvironment=require("dotenv")
const app = express();
const cors = require("cors");

envvironment.config({path:'src/.env'});
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/RentelServices").
then(()=> console.log("db connected...............")).
catch(err => console.log("faild db connection"));

let Rentel = new mongoose.Schema({
    email:String,
    username:String,
    password: String

});

const rentelItem = new mongoose.Schema({
    name:String,
    price:Number,
    des:String,
    url:String
});

const cartItem = new mongoose.Schema({
    _id:String,
    name:String,
    price:Number,
    des:String,
    url:String
})

let RentelServices = mongoose.model("rentel", Rentel); 
const rentelItems = mongoose.model("rentelItems", rentelItem);
const cartItems = mongoose.model("cartItems", cartItem);

app.get("/" , (req, res) =>{
    res.send("Hello Wrold server is working");
})

app.post("/sign",  (req, res) =>{
    const email = req.body.email;
    const username = req.body.uName;
    const password = req.body.passwd;

    const user1 =  new RentelServices({
        email:email,
        username:username,
        password:password

    })

    user1.save().then(() => console.log("data save succesffully....")).
    catch(()=> console.log("data not save..."));

    res.redirect("http://localhost:3000/login");
})

app.post("/login", async (req, res) =>{

   try{
    const username = req.body.uName;
    const passwd = req.body.passwd;

    let usr = await RentelServices.find({username:username, password:passwd});
    let id = (usr[0]._id);
 
    let token = jwt.sign({id:{id}}, process.env.SECRET, {expiresIn:"60s"});
    res.cookie('token', token);
    if(token ){
        res.redirect("http://localhost:3000/Home");
    }
   }catch(err){
    console.log(err);
   }
})

app.post('/additem',  async(req, res) =>{
    const name =req.body.name;
    const parice =req.body.price;
    const des =req.body.des;
    const url =req.body.url;
   let item1 = new rentelItems({
    name:name,
    price:parice,
    des:des,
    url:url
   });
    await item1.save()
    res.status(200)
    res.redirect("http://localhost:3000/add-item");
})

app.get('/userItems' , async(req, res) =>{
    const allData = await rentelItems.find();
    res.send(allData);
})
app.post('/addCart', async (req, res)=>{
    const id = req.body.id;
    const data = await rentelItems.findById(id);
    res.send(data);
})

app.post("/cartItem" , async(req, res)=>{
    try{
        const data =  req.body;
        const cartData = new cartItems(data);

        const id = req.body._id;
        const theItem = await cartItems.findById(id);
        if(theItem==null){
            await cartData.save();
             res.status(201).json({succuss:"successfullllll"});
        }else{
            console.log('item is already aded in side the cart')
        }
        
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error"); 
    }
})

app.get("/getCartDAta", async (req, res)=>{
    const allData = await cartItems.find()
    res.send(allData);
})

app.post("/deleteCartItem", async (req, res) =>{
    const id = req.body._id;
    await cartItems.findByIdAndDelete(id);
})

app.listen(5000 , () =>{
    console.log("port is listing on 5000...........");
})

