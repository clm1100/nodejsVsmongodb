var mongoose = require('mongoose');
// 不需要返回值;
 mongoose.connect('mongodb://localhost:27017/myapp96', { useNewUrlParser: true },function(){
    console.log("pk")
})
// 通过connection获取数据库连接对象,这个对象用于构造模型;
var db = mongoose.connection;
console.log(mongoose.model.toString())
console.log(db.model.toString())
var TestSchema = new mongoose.Schema({
    name : {type:String},
    age : {type:Number,default:0},
    time : {type:Date,default:Date.now},
    emial : {type:String,default:''}
});
// var TestModel = mongoose.model("test1", TestSchema);
// 上面这种写法也可以,下面的是正规写法
var TestModel = db.model("test1", TestSchema);

var TestEntity = new TestModel({
    name : "Lenka",
    age : 36,
    email : "lenka@qq.com"
});
console.log(TestEntity.name); // Lenka
console.log(TestEntity.age); // 36
// 增加新数据的第一种写法;
TestEntity.save((err,data)=>{
    console.log(err,data)
})