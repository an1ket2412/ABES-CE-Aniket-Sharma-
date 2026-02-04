const http = require('http');

const server = http.createServer((req, res) => {
    //console.log('Server is running');
    //res.end('Hello World');
    if(req.url == '/'){
        res.end("this is my homepage");
    }
    else if(req.url == '/about') {
        res.end("this is my about page");
    }

    else {
        res.end("404 page is not found");
    }
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});


