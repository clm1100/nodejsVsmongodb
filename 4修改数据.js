const {TestModel,UserModel,FatherModel} = require('./models/orm.js')
// UserModel.findByIdAndUpdate();
// UserModel.findOneAndUpdate();
// UserModel.update();
// UserModel.updateOne();
// UserModel.updateMany();
// UserModel.findOne({},(err,data)=>{
//     // 修改data

//     data.save((err,data)=>{

//     })
// })

// UserModel.findById({},(err,data)=>{
//     // 修改data

//     data.save((err,data)=>{
        
//     })
// })
// 修改某个一级属性
// FatherModel.updateOne({child:{"$size":"5"}},{name:"尼古拉斯赵四"}).then((data)=>{
//     console.log(data);
// })
// 修改二级属性最好用的方法吧,先查询在修改;
// FatherModel.findOne({child:{"$size":"5"}},(err,data)=>{
//     console.log(data.child)
//     data.child.push({name:"尼姑拉丝",sex:"男"});
//     data.save((err,data)=>{
//         console.log(data)
//     })
// })
// $pull的使用方法,此方法操纵的是数组,{$pull:"需要删除的数组项"}
// FatherModel.updateMany({},{$pull:{"child":{"$size":2}}},(err,data)=>{
//     console.log(data);
// })
// FatherModel.remove({},(err,data)=>{console.log(data)})

// 复杂的修改语句,