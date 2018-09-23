const {TestModel,UserModel} = require('./models/orm.js')
const log = (err,data)=>{console.log(err);console.log(data)}
// 已经废弃了;
UserModel.remove({},(err,data)=>{
    log(err,data);
})
UserModel.findByIdAndRemove(id,(err,data)=>{
    console.log(data);
})
UserModel.findOneAndRemove({_id:id},(err,data)=>{

})
// UserModel.deleteOne({"_id" : "5b969ea503e9181330f71b77"},(err,data)=>{
//     console.log(err);
//     console.log(data);
// })
// 注意：This function does not trigger any middleware.不实用;

// UserModel.deleteMany({},(err,data)=>{
//     log(err,data);
// })
// 注意:Like Model.remove(), this function does not trigger pre('remove') or post('remove') hooks.

