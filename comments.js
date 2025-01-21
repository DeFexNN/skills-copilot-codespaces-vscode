// Create web server
var express = require('express');
var app = express();
// Set view engine
app.set('view engine', 'ejs');
// Set views directory
app.set('views', './views');
// Set public directory
app.use(express.static('public'));
// Set route
app.get('/', function(req, res) {
    // Render view
    res.render('comments');
});
// Start web server
app.listen(3000, function() {
    console.log('Web server is running on http://localhost:3000');
});