const {TestModel,UserModel} = require('./models/orm.js')
UserModel.findByIdAndUpdate();
UserModel.findOneAndUpdate();
UserModel.update();
UserModel.updateOne();
UserModel.updateMany();
UserModel.findOne({},(err,data)=>{
    // 修改data

    data.save((err,data)=>{

    })
})

UserModel.findById({},(err,data)=>{
    // 修改data

    data.save((err,data)=>{
        
    })
})

// 复杂的修改语句,