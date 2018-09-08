const TestModel = require('./models/1connect.js');
let result  = TestModel.find({age:"18"});
let result1  = TestModel.findOne({age:"18"});
let result2 = TestModel.findById('5b9403029528be12cce9997f')
let result2_1 = TestModel.findById('5b9403029528be12cce9997f',"name")
// result.then((data)=>{
//     console.log(data);
// })
// result1.exec((err,data)=>{
//     console.log(data)
// })
// result2.select("name").then((data)=>{
//     console.log(data)
// })

result2_1.then((data)=>{
    console.log(data)
})