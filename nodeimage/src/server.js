var express = require('express');

// Constants
var PORT=8080;

//APP
var app = express();
app.get('/',function (req, res){
	res.sendfile('/src/index.html');
});

app.listen(PORT);
console.log('RUNNING ON PORT' + PORT);
