var mysql      = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password!',
  database : 'forme',
  dateStrings: 'date'
});

db.connect();

module.exports = db;