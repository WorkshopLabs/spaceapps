var subdomain = require('express-subdomain');
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var router2 = express.Router();
var port = process.env.PORT || 3030;

//api specific routes
router.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../public/space.html'));
});

router2.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../public/grafico.html'));
});


// app.get('/', function(req, res) {
// res.sendFile(path.join(__dirname, '../public/grafico.html'));
// });

app.use(subdomain('space', router));
app.use(subdomain('grafico', router2));

app.use(express.static(path.join(__dirname, '../public')));




app.listen( port, function(){
    console.log('conectado en ', port);
});
