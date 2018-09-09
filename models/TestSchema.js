var mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;
var TestSchema = new Schema({
    name : {type:String,required:true},
    age : {type:Number,default:0},
    time : {type:Date,default:Date.now},
    emial : {type:String,default:''},
    user:{type:ObjectId,ref:'users'}
});
// var TestModel = db.model("test1", TestSchema);
// module.exports = TestModel;

module.exports = TestSchema;