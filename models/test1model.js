var mongoose = require('mongoose');
var db       = require('./1connect.js');
var TestSchema = new mongoose.Schema({
    name : {type:String,required:true},
    age : {type:Number,default:0},
    time : {type:Date,default:Date.now},
    emial : {type:String,default:''}
});


// TestSchema.pre('save',(next)=>{
//     console.log("pre-save")
//     next()
// })
// TestSchema.pre('insertMany',(next)=>{
//     console.log("pre-insertMany")
//     next()
// })
// // 数据存储完成之后再进行操作;
// // 执行顺序为1、先执行pre的函数;2、然后进行存储动作,3、存储完成后执行post的回调,4、执行save的回调,此时回调的结果已经被post处理过,
// TestSchema.post('save',(next)=>{
//     console.log("post-save")
//     console.log("next",next);
//     next.name = "123";
// })


var TestModel = db.model("test1", TestSchema);
module.exports = TestModel;