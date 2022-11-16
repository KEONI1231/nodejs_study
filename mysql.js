var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '127.0.0.1',    // 호스트 주소
  user     : 'root',           // mysql user
  password : 'webkh141303!',       // mysql password
  database : 'db_test'         // mysql 데이터베이스
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', 
function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
connection.end();