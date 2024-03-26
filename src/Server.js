const express = require("express");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
const app = express();
env.config();
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect("mongodb://127.0.0.1:27017/RentelServices").
then(()=> console.log("db connected...............")).
catch(err => console.log("faild db connection"));

let Rentel = new mongoose.Schema({
    email:String,
    username:String,
    password: String

});

let RentelServices = mongoose.model("rentel", Rentel); 

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

    res.redirect("http://localhost:3000/");
})

app.post("/login", async (req, res) =>{

   try{
    const username = req.body.uName;
    const passwd = req.body.passwd;

    let usr = await RentelServices.find({username:username, password:passwd});
    let id = (usr[0]._id);
 
    let token = jwt.sign({id:{id}}, process.env.SECRET_key , {expiresIn:"60s"});
    res.cookie('token', token);
    res.redirect("http://localhost:3000/");

   }catch(err){
    console.log(err);
   }


})

app.listen(5000 , () =>{
    console.log("port is listing on 5000...........");
})

