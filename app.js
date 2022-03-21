const express= require("express");
const app = express();
const path = require("path");
const port = 5000;
const mongoose = require('mongoose')

const connect = ()=>{
    return mongoose.connect("mongodb+srv://harsh:harsh001@cluster0.84eyj.mongodb.net/Users?retryWrites=true&w=majority");}

//  schemas
   
    const userSchema = new mongoose.Schema(
        {
            firstName:{type:String, required:true,minLength:3,maxLength:30},
            lastName:{type:String,required:false,minLength:3,maxLength:30},
            age:{type:Number, required:true,range:{min:{type:Number, min: 1},max:{type:Number, max: 150}}},
            email:{type:String, required:true},
            profileImages:{type:String, required:true,range:{min:{type:String, min: 1}}},
            bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book", required:false}
        },
        {
            versionKey:false,
            timestamps:true
        }
    )
    const User = mongoose.model("user",userSchema);



    const bookSchema = new mongoose.Schema(
        {
            likes:{type:Number, required:true, default:0},
            coverImage :{type:String, required:true,range:{max:{type:String, max: 1}}},
            content:{type:String, required:true},
            userId:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true},
            publicationId:{type:mongoose.Schema.Types.ObjectId,ref:"publication", required:true},
            commentId:{type:mongoose.Schema.Types.ObjectId,ref:"comment", required:false}
        },
        {
            versionKey:false,
            timestamps:true
        }
    )
    const Book = mongoose.model("book",bookSchema);


    
    const publicationSchema = new mongoose.Schema(
        {
            name:{type:String, required:true},
            bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book", required:false}
        },
        {
            versionKey:false,
            timestamps:true
        }
    )
    const Publication = mongoose.model("publication",publicationSchema);

    
    const commentSchema = new mongoose.Schema(
        {
            body:{type:String, required:true},
            userId:{type:mongoose.Schema.Types.ObjectId,ref:"user", required:true},
            bookId:{type:mongoose.Schema.Types.ObjectId,ref:"book", required:false}
        },
        {
            versionKey:false,
            timestamps:true
        }
    )
    const Comment = mongoose.model("comment",commentSchema);



// CRUD

app.get("/user", (req, res) => {
    res.send("h")
})

app.listen(port,(req, res) => {
    console.log("listening on port " + port);
});