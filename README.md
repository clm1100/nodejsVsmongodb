##mongoose教程
mongoose连接数据库有两种方案第一种为使用connect连接，特点如下：
+ 项目只是用一个数据库
+ 此种连接方式没有返回值
+ 连接对象需要使用mongoose.connection来获取
+ 也可以直接使用mongoose来作为连接对象
~~~
var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/myapp96', { useNewUrlParser: true },function(){
    console.log("pk")
})
var db = mongoose.connection;
~~~

### 另外一种连接方式使用createConnection连接：
~~~
var mongoose = require('mongoose');
var db       = mongoose.createConnection('mongodb://127.0.0.1:27017/myapp96',{ useNewUrlParser: true }); 

~~~
### 特点如下：
+ 此种连接有返回值,其返回值即连接对象
+ 此种连接方式适合项目使用多个数据库

### 相比较于mysql来说,mongoose不需要建立表了，但是需要建立模型。
+ 建立模型需要用到mongoose.schema 方法;
+ 建立完模型用model方法和数据库中的表关联;
+ 

