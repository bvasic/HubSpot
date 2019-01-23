/* Bojan Vasic for HubSpot 23.01.2019 */
var bodyParser = require('body-parser');
var express = require('express');
var server = express();
var form = require('express-form');
var port = process.env.PORT || 7777;
var jsonfile = require('jsonfile');
var fs = require('fs');
var file = './data/data.json';
var path = require('path');
var content = fs.readFileSync("./data/data.json");

// Define to JSON type
var jsonContent = JSON.parse(content);

server.use(express.static(path.resolve('./bundle')));
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(bodyParser.urlencoded({extended: true}))

server.listen(port, function(){
    console.log("Server running on port "+port);
    });

//MAIN GET REQUEST
server.get('/', (req, res) => {
   res.send('Hello World!') ;
 //  content.find().toArray(function(err, results) {
 //  		res.render('index.ejs', {media: results});
	// });
  // render EJS template populated with data from data.json
});