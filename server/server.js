var subdomain = require('express-subdomain');
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var port = process.env.PORT || 3030;

//api specific routes 
router.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '../public/space.html'));
});
 
router.get('/users', function(req, res) {
    res.json([
        { name: "Brian" }
    ]);
});


// app.get('/', function(req, res) {
//     res.send('Homepage');

// });

app.use(subdomain('space', router));

app.use(express.static(path.join(__dirname, '../public')));




app.listen( port, function(){
    console.log('conectado en ', port);
});