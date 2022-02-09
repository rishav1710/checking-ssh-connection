const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
app.set("view engine",'hbs');
const partial=path.join(__dirname+"/views/partials");

hbs.registerPartials(partial);
app.get("/",(req,res)=>{
    res.render("index",{
        example:"Rishav"
    });
})


app.listen(3000,(req,res)=>{
    console.log("running at port 3000");
})