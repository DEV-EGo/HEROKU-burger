var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        host: process.env.HOST || "localhost",
        port: 3306,
        user: process.env.USER || "root",
        password: process.env.PASSWORD || "root",
        database: process.env.DATABASE || "burger_db"
    });

}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    // console.log("connected as id " + connect.threadId);
});
module.exports = connection;
