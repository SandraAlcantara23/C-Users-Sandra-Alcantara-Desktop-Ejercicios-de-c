
const mongoose = require("mongoose");
const bcrypt = require ("bcryptjs")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type: String,
        require: true,
    },

});


userSchema.pre("save",async function (next) {
    if (!this.isModified("password")) return this.next();
    
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

userSchema.method.comparePassword = (password)=>{
    return bcrypt.compare(password,this.password);
}

module.exports = mongoose.model("User",userSchema);