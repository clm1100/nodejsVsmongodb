// const TestSchema = require('./models/TestSchema.js');
// const UserSchema = require('./models/UserSchema.js');
// const db = require('./models/1db.js');
// const TestModel = db.model("test1",TestSchema)
// const UserModel = db.model('users',UserSchema)
const {TestModel,UserModel} = require('./models/orm.js')

// UserModel.find({}).populate("user",{name:1,_id:0}).then((data)=>{
//     console.log(data)
// })
// “$lt”	小于
// “$lte”	小于等于
// “$gt”	大于
// “$gte”	大于等于
// “$ne”	不等于
// 年龄大于等于10岁
// UserModel.find({age:{$gte:10}}).populate("user",{name:1,_id:0}).then((data)=>{
//     console.log(data)
// })
// // 年龄小于10岁
// UserModel.find({age:{$gte:10}}).populate("user",{name:1,_id:0}).then((data)=>{
//     console.log(data)
// })
//年龄大于等与2对小于等于4岁
// UserModel.find({age:{$gte:2,$lte:4}},{_id:0,age:1,name:1}).populate("user",{name:1,_id:0}).then((data)=>{
//     console.log(data)
// })
// ###或查询 OR:
// UserModel.find({age:{"$in":[2,4]}},(err,data)=>{
//     if(err) return console.log(err);
//     console.log(data)
// })
// 查找name值为李四3或者age为2
// UserModel.find({$or:[{age:2},{name:'李四3'}]},(err,data)=>{
//         if(err) return console.log(err);
//     console.log(data)
// })

// 类型查询
// 查询存在age字段的人
// UserModel.find({age:{$exists:true}},(err,data)=>{
//     console.log(data)
// })
// 查询存在age字段，但age为null的人
UserModel.find({age:{$in:[null],$exists:true}},(err,data)=>{
    console.log(data)
})
// UserModel.findOne({},(err,data)=>{
//     data.age= null;
//     data.save();
// })
// UserModel.create({name:"李四"});

// 分页接口
// UserModel.find({},null,{skip:2,limit:2}).populate("user",{name:1,_id:0}).then((data)=>{
//     console.log(data)
// })
// UserModel.find({},{name:1,_id:0}).skip(2).limit(2).populate("user",{name:1,_id:0}).then((data)=>{
//     console.log(data)
// })