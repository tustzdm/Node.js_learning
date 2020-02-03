//使用node构建一个web服务器
//01 node中提供了一个核心模块：http
//http 帮你创建编辑服务器



//01加载http模块
var http = require('http');

//02 使用http.createServer创建一个web服务器
//返回一个server实例
var server = http.createServer();

//03 服务器提供数据服务
//接受请求，处理，给反馈(发送响应)

//注册request事件，客户端发来请求，执行第二个参数的回调函数
server.on('request',function(){
    console.log('receive message')
})

//04 绑定端口号,启动服务器
server.listen(3000,function(){
    console.log('服务启动成功， 通过http:127.0.0.1:3000 访问')
})

