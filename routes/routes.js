console.log("require the action file from routes");

var Action = require("C:/Users/N.R.Kannan/Desktop/New folder/action/action.js");


var UIRoutes = function(app) {

    this.app = app;

    this.actionInstance = new Action(app);
    console.log("creating a instance of action file from routes");
    
};

 console.log("exports the UIRoutes");

 module.exports = UIRoutes;

 UIRoutes.prototype.init = function() {

    var self = this;
    var app = this.app;
    console.log("client request and action responce");

    console.log("Enter the API hello or login");
    
    app.get('/',function(req,res){

    	res.sendFile('C:/Users/N.R.Kannan/Desktop/New folder/www/index.html');
    });

   app.get('/hello',function(req,res){

   	    var request=12;

   	    console.log("request.query");

   	   var reqobj=req.query;


   	   console.log("routes send the request to action",reqobj);

   	      self.actionInstance.hello(reqobj,function(error,responce){
   	      	console.log("/hello API responce");
   	      	res.send(responce);
   	      })
   }) 


};





	