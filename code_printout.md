## Hello World

        //Http library is native to node.js
        var http = require('http')
          , host = "127.0.0.1"
          , port = 4000;


        http.createServer(function (req, res) {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Hello world \n');
        }).listen(port, host);


        console.log('Server running at http://' + host +  ':' + port);


## package.json
        {                                                                                                     
            "name" : "VariableTracker"                                                                        
          , "version" : "0.0.0"                                                                               
          , "description" : "A tool for tracking your variables as they change"                               
          , "dependencies" : {                                                                                
             "coffee-script" : "latest"                                                                       
           , "redis" : "latest"                                                                               
           , "coffee-middleware" : "latest"                                                                   
           , "socket.io" : "latest"                                                                           
           , "express" : "latest"                                                                             
           , "jade" : "latest"                                                                                
          }                                                                                                   
        }  
## App.js
