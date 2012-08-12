var db = require("./db");



exports.home = function(req, res){

	var usersCollection = db.collection("users");
	db.users.find(function(err, doc){
		if(!doc){
			console.log(err);
		}else{
			console.log(doc[0].username);
			getRender(doc);
		}
		
	});	

	function getRender(users){
		res.render('home', 
		{ 
			title: 'Welcome to a Bookmarklet a Sharing!',
			users : users
		})
	}
};

exports.newuser = function (req, res){
	res.render("newuser", {
		title: "Hello Fellow!"
	});
};


exports.createnewuser = function (req, res){
	var password = req.body.password;
	var username = req.body.username;
	
	console.log(username + " " + password );
	res.render("newuser", {
		title: "Hello Fellow!"
	});
};
