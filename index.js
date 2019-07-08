var express = require('express'),
	app = express();

app.get("/", function(req, res){
	res.send("hi this is express");
});

app.listen(3000,function(){
	console.log("app is running");
});
	