const http = require('http');


http.createServer(function (req, res) {
  res.write('karan singh');
  res.end(); 
}).listen(4000);