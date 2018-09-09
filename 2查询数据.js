// const TestSchema = require('./models/TestSchema.js');
// const UserSchema = require('./models/UserSchema.js');
// const db = require('./models/1db.js');
// const TestModel = db.model("test1",TestSchema)
// const UserModel = db.model('users',UserSchema)
const {TestModel} = require('./models/orm.js')

TestModel.find({}).populate("user",{name:1,_id:0}).then((data)=>{
    console.log(data)
})