
var http = require('http');

var server = http.createServer();

// request请求对象
//      用来获取客户端的一些请求信息
// response对象
//      用来给客户端发送响应消息
server.on('request',function(request,response){
    console.log('receive request' + request.url)

    //response 有一个write 方法，可以用来给客户端发送响应数据
    //write 可以使用多次，但最后一定要用end结束响应否则客户端会一直等待
    response.write('Hello');
    response.write('Node.js');

    //结束
    response.end()
})

server.listen(3000,function(){
    console.log('服务启动成功， 通过http:127.0.0.1:3000 访问')
})