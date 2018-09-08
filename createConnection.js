var mongoose = require('mongoose');
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/myapp96',{ useNewUrlParser: true }); 
const schema = mongoose.Schema;

const  TestSchema = new schema({
    name : {type:String},
    age : {type:Number,default:0},
    time : {type:Date,default:Date.now},
    emial : {type:String,default:''}
},{ versionKey:false})

const TestModel = db.model('test1',TestSchema);

var TestEntity = new TestModel({
    name : "Lenka",
    age : 36,
    email : "lenka@qq.com"
});
console.log(TestEntity.name); // Lenka
console.log(TestEntity.age); // 36
TestEntity.save((err,data)=>{
    console.log(err,data)
    db.close();
})






