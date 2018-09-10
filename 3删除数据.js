const {TestModel,UserModel} = require('./models/orm.js')

// 已经废弃了;
// UserModel.remove({},(err,data)=>{
//     console.log(err);
//     console.log(data);
// })
// UserModel.deleteOne({"_id" : "5b969ea503e9181330f71b77"},(err,data)=>{
//     console.log(err);
//     console.log(data);
// })
// 注意：This function does not trigger any middleware.不实用;