const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:String
})
// const userModel = db.model('users',userSchema);

// module.exports = userModel;
userSchema.pre("remove",(next)=>{
    console.log("remove");
    next()
})

module.exports = userSchema;
