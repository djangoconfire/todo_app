var bodyParser=require('body-parser');
var urlencodeParser=bodyParser.urlencoded({extended:false});
var mongoose=require('mongoose');

// connect to the database
mongoose.connect('mongodb://test:test@ds143990.mlab.com:43990/todo');

// create a schema
var todoSchema=new mongoose.Schema({
    item:String
});

// create a model
var Todo=mongoose.model('Todo',todoSchema);

// var data=[{item:'Inception'},{item:'Blood Diamond'},{item:'Titanic'}];
module.exports=function(app){
  app.get('/todo',function(req,res){
      // get data from mongodb and pass it to view.
      Todo.find({},function(err,data){
          if (err) throw err;
          res.render('todo',{todos:data});
      });

  });

  // post request
  app.post('/todo',urlencodeParser, function(req,res){
      //  get data from view and save it to mongodb
      var newtodo=new Todo(req.body).save(function(err,data){
          if (err) throw err;
          res.json(data);
      });
      data.push(req.body);
      res.json(data);
  });

  // delete request
  app.delete('/todo/:item',function(req,res){
      data=data.filter(function(todo){
          return todo.item.replace(/ /g,"-") != req.params.item
      });
      res.json(data);
  });
}
