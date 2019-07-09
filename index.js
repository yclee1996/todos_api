var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

//so that it will reference to the views dir



app.get("/", function(req, res){
	res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

//the first argument is the common prefix of our urls
//and then the second argument we add our modulized routes



app.listen(3000,function(){
	console.log("app is running");
});
	