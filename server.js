var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var port = process.env.PORT || 5000;

app = express();
app.use(serveStatic('./dist'));
app.listen(port);

console.log('server started '+ port);
