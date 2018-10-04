console.log("require the service file from action");

var service=require("C:/Users/N.R.Kannan/Desktop/New folder/services/service.js");
console.log("creating a instance variable for service from action");



var Apiaction = function (app) {
    this.app = app;
    this.apiServiceInstance = new Service(app);
};

console.log("Export the action file");

module.exports = Apiaction;

Apiaction.prototype.hello=function(reqobj,callback){
	console.log("the class hello responce");

	 var self=this;

	 console.log("request based input");
	 var request=reqobj;

	 console.log("user request");
	 var reqobj={
	 	username:request.username,
	 	password:request.password
	 }
	 console.log("action send the request to service",request);
	 console.log("find the username and password");
	 self.apiServiceInstance.hello(request,function(error,responce){
	 	console.log("check the required name & password are equal to db value");
	 	console.log("responce",responce);
	 	if(reqobject.username=responce.username &&reqobject.password==responce.password){
	 		responce=true;
	 	}
	 	else {
	 		responce=false;
	 	}


	 	console.log("apiServiceInstance responce");

	 	callback(error,responce);
	 })	
	 };
