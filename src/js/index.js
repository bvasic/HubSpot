/* Bojan Vasic for HubSpot 23.01.2019 */
var bodyParser = require('body-parser');
var express = require('express');
var server = express();
var form = require('express-form');
var port = process.env.PORT || 7777;
var jsonfile = require('jsonfile');
var fs = require('fs');
var path = require('path');
var file = './data/data.json';
// jsonfile.readFile(file, function(err,obj){
//     console.log(obj);
// });

// Define to JSON type
// var jsonContent = JSON.parse(file);

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(express.static(__dirname+'/../views/'));
server.use(express.static(__dirname+'/../../src/bundle/'));
server.use(express.static(path.join(__dirname, 'src')));
server.use(express.static(path.join(__dirname, 'src/bundle/css')))
server.set('view engine', 'ejs');

server.use(express.static(path.resolve('/../bundle/')));


server.listen(port, function(){
    console.log("Server running on port "+port);
    });


// server.get("/",function(req,res){
//     jsonfile.readFile(file, function read(err, data) {
//         if (err) {
//             throw err;
//         }
//         var content = data;
//         res.json(content);
//     });    
// });
//MAIN GET REQUEST
server.get('/',function(req,res){
	console.log("get request sent");
	var testing = jsonfile.readFile(file, function read(err, data) {
        if (err) {
            throw err;
        }
        var content = data;
        res.json(content);
    });  
    var bla = JSON.stringify(testing);

	//res.render('index');
	res.render(__dirname+'/../views/pages/index.ejs',bla);
  	//res.send(jsonContent);
  	//res.render('index.ejs',{media : jsonContent});
  	//render EJS template populated with data from data.json
});