var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp96', { useNewUrlParser: true },function(){
    console.log("数据库连接成功")
})
var db       = mongoose.connection;
module.exports = db;
