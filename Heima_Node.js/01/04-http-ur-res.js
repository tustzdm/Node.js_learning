var http = require('http');

//1.创建server
//2.监听request事件，设置请求处理函数
//3.绑定端口号，启动服务

var server = http.createServer()

server.on('request', function(req, res){
    console.log('收到请求了，请求路径是: ' + req.url);

    // res.write('Hello');
    // res.write('World');
    // res.end();

    // res.end('Hello Nodejs')

    var url = req.url;

    // if(url === '/'){
    //     res.end('Hello Nodejs')
    // }else if( url === '/a'){
    //     res.end('a Page')
    // }else{
    //     res.end('404 Not Found')
    // }

    if(url === '/'){
        res.end('Hello Nodejs')
    }else if( url === '/a'){
        res.end('a Page')
    }else if(url === '/products'){
        var products =[
            {
                name:'Iphone X',
                price:1000
            },
            {
                name:'Iphone X',
                price:1000
            },
            {
                name:'Iphone X',
                price:1000
            }
        ]
        res.write('XXX');
        res.end(JSON.stringify(products));
    }
})

server.listen(3000,function(){
    console.log('服务器启功成功')
})