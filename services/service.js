
var service = function (app) {
    this.app = app;

};

 console.log("export the service file");

 module.exports = service;



 console.log("service send the respone to the action error or result");



 service.prototype.hello=function(request,callback){
 	    console.log("creating a self variable");
 	  var self=this;
 	  var db =self.app.db;

 	  var MongClient = require('mongodb').MongClient;
 	  var url = "mongodb://localhost:27017/";
 	    console.log("connect the database");
 	    MongClient.connect(url,function(error,db){

 	    	if(err) throw err;
 	    	console.log("access the database");
 	    	var dbo = db.db("student");
 	    	console.log("find the table and values");
 	    	dbo.collaction('Emailid').find({username:"mukunthan"},{_id:0,username:1,password:1}).toArr
 	    	console.log("return the values");
 	    	if (err) throw err;
 	    	console.log(result);
 	    	db.close();
 	    	callback(err,result)
 	    	 	    });
 	    
 	}