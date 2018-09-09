var mongoose = require('mongoose');
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/myapp96',{ useNewUrlParser: true }); 
module.exports = db;