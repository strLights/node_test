const requests = require('requests')
const fs = require('fs')
const path = require('path')

requests('https://www.jsdaima.com/Uploads/js/201803/1522376449/css/demo.css')
.on('data', function (chunk) {
  console.log(chunk)
  fs.writeFile(path.resolve(__dirname,'css','demo.css'), chunk, ()=>{
    console.log("保存成功");
    
  })
})