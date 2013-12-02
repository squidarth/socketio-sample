var http = require('http')
  , host = "127.0.0.1"
  , port = 4000;


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World \n');
}).listen(port, host);


console.log('Server running at http://' + host +  ':' + port);
