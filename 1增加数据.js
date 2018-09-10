const {TestModel,UserModel} = require('./models/orm.js')
// // 增加数据的第一种方式
// TestModel.create({name:"小龙2",age:"18"},(err,result)=>{
//     if(err) return console.log(err.message);
//     console.log("post执行完了,我才执行")
//     console.log(result)
// })
// // 第二种方式:
// var newTestModel = new TestModel({
//     name:"张三",
//     age:'24',
//     user:'5b9559ff95872d14bcbcb303'
// })
// console.log(newTestModel);
// newTestModel.save((err,result)=>{
//     console.log("err",err);
//     console.log("result:",result)
// })
// 第三种方式,插入大量数据
UserModel.insertMany([
    {name:'李四1'},
    {name:'李四2'},
    {name:'李四3'},
    {name:'李四4'},
    {name:'李四5'},
],(err,result)=>{
   if(err) return  console.log(err);
    console.log(result.length)
})