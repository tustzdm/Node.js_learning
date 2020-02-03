var fs = require('fs');
//fs 提供了读取文件操作相关的api

fs.readFile('./data/hello.txt',function(error,data){
    console.log(data.toString());
})