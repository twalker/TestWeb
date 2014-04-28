var http = require('http')
  , express = require('express')
  , path = require('path');

var app = module.exports = express();
/**
 * Configuration
 */
app.set('port', process.env.PORT || 3000);
  
app.get('/*', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hello world\n');
});
  
/**
 * Start the server
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log('TestWeb node server listening on port "%s" with "%s" env settings.', app.get('port'), app.get('env'));
});  

