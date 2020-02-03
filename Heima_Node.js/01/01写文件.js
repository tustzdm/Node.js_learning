var fs = require('fs');

fs.writeFile('./data/write.txt','write file by code second time',function(err){
    console.log(err)
})

//writeFlie会覆盖源文件