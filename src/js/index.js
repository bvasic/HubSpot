/* Bojan Vasic for HubSpot 23.01.2019 */
var bodyParser = require('body-parser');
var express = require('express');
var server = express();
var form = require('express-form');
var port = process.env.PORT || 7777;
var jsonfile = require('jsonfile');
var fs = require('fs');
var path = require('path');
var content = fs.readFileSync("./data/data.json");

// Define to JSON type
var jsonContent = JSON.parse(content);

server.use(bodyParser.urlencoded({extended: true}))
server.use(express.static(__dirname+'/../views/'));
server.use(express.static(__dirname+'/../bundle/css/'));
server.set('view engine', 'ejs');


server.listen(port, function(){
    console.log("Server running on port "+port);
    });

//MAIN GET REQUEST
server.get('/', (req, res)=>{
	console.log("get request sent");
	//res.render('index');
	res.render(__dirname+'/../views/pages/index.ejs',{data : jsonContent});
  	//res.send(jsonContent);
  	//res.render('index.ejs',{media : jsonContent});
  	//render EJS template populated with data from data.json
});