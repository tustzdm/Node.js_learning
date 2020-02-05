var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request',function(request,response){
    console.log('receive request' + request.url)

    var url = request.url;
    if(url ==='/'){
        fs.readFile('./view/index.html',function(err,data){
            if (err) {
                response.end('read failed')
            } else {
                response.setHeader('Content-Type','text/html; charset = utf-8');
                response.end(data);
            }
        })
    }else if(url === '/pic'){
        fs.readFile('./view/man1.png',function(err,data){
            if (err) {
                response.end('read failed')
            } else {
                //图片就不需要编码了，图片就不需要编码了
                response.setHeader('Content-Type','image/png');
                response.end(data);
            }
        })
    }
})

server.listen(3000,function(){
    console.log('服务启动成功， 通过http:127.0.0.1:3000 访问')
})