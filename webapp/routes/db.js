var databaseURI = "localhost:27017/mydb";
var collections = ["users"];
var db = require("mongojs").connect(databaseURI, collections);

module.exports = db;