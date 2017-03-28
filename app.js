var express=require('express');
var todoController=require('./controllers/todoController');
var app=express();

// set up the template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static(__dirname + '/public'));

// fire the controllers
todoController(app);

// listen the port
app.listen(3000);
console.log('server running on port 3000');
