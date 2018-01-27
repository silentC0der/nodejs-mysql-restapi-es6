const mysql = require('promise-mysql');
const constants = require('../lib/constants.js');
const connection = mysql.createPool(constants.STAGING);
connection.getConnection(function(err, connection) {
    if (connection) {
        connection.release();
    } else if (err) throw err;
});

module.exports = class Connection {
  constructor() {
    if (connection) {
      this.connection = connection;
    }
  }
} 