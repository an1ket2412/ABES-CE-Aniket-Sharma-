const http = require('http');
const fs = require('fs');
const path = require('path');


const myserver=http.createServer((req, res) => {
    // console.log("server1");
    // res.end("Hello from server1");
    // if(req.url=="/"){
    //     res.end("ABES Engineering College");
    // }
    if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <h1>ABES Engineering College</h1>
          <img src="https://image-static.collegedunia.com/public/reviewPhotos/1144603/daa8e3c7-a031-4792-a501-d2018c99a906-1_all_24982.jpg" width="300" />
        </body>
      </html>
    `);
  }
    else if(req.url=="/about"){
        res.end("we are students");
    }
    else if(req.url=="/class"){
        res.end("CE");
    }
     else{
        res.end("404 page not found");
     }

})
myserver.listen(8000,()=> console.log("server is run"));