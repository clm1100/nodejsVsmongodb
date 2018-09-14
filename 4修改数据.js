const {TestModel,UserModel} = require('./models/orm.js')
UserModel.findByIdAndUpdate();
UserModel.findOneAndUpdate();
UserModel.update();
UserModel.updateOne();
UserModel.updateMany();