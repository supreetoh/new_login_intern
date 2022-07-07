const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
         unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

 

userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        next();
    }
    
    this.password = await bcrypt.hash(this.password,10);

})

module.exports = mongoose.model('Registeruser',userSchema )