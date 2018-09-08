var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/myapp96', { useNewUrlParser: true },function(){
    console.log("数据库连接成功")
})
var db = mongoose.connection;
var TestSchema = new mongoose.Schema({
    name : {type:String,required:true},
    age : {type:Number,default:0},
    time : {type:Date,default:Date.now},
    emial : {type:String,default:''}
});

TestSchema.pre('save',(next)=>{
    console.log("pre-save")
    next()
})
// 数据存储完成之后再进行操作;
// 执行顺序为1、先执行pre的函数;2、然后进行存储动作,3、存储完成后执行post的回调,4、执行save的回调,此时回调的结果已经被post处理过,
TestSchema.post('save',(next)=>{
    console.log("post-save")
    console.log("next",next);
    next.name = "123";
})


// var TestModel = mongoose.model("test1", TestSchema);
// 上面这种写法也可以,下面的是正规写法
var TestModel = db.model("test1", TestSchema);
module.exports = TestModel;