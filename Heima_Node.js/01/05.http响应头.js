var http = require('http');

var server = http.createServer();

server.on('request',function(req,res){
    res.setHeader('Content-Type', 'text/plain, charset=utf-8')
    res.end('this is 中文');
})

server.listen(3000,function(){
    console.log('服务器运行中')
})