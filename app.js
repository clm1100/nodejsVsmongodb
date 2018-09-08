var mongoose = require('mongoose');
var db1 = mongoose.connect('mongodb://localhost:27017/myapp96', { useNewUrlParser: true },function(){
    console.log("pk")
})
var db = mongoose.connection;
// console.log(db)
var TestSchema = new mongoose.Schema({
    name : {type:String},
    age : {type:Number,default:0},
    time : {type:Date,default:Date.now},
    emial : {type:String,default:''}
});
var TestModel = db.model("test1", TestSchema);

var TestEntity = new TestModel({
    name : "Lenka",
    age : 36,
    email : "lenka@qq.com"
});
console.log(TestEntity.name); // Lenka
console.log(TestEntity.age); // 36
TestEntity.save((err,data)=>{
    console.log(err,data)
})

// var mongoose = require('mongoose');
// var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/myapp96',{ useNewUrlParser: true }); 
// console.log(db)





// var Schema = mongoose.Schema;

// var blogSchema = new Schema({
//     title: String,
//     author: String,
//     body: String,
//     comments: [{ body: String, date: Date }],
//     date: { type: Date, default: Date.now },
//     hidden: Boolean,
//     meta: {
//         votes: Number,
//         favs: Number
//     }
// });