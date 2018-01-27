const Connection = require("../db/db_config_mysql");
class UsersDB extends Connection {
  constructor(connection) {
    super(connection); //call the parent method with super
    this.db = this.connection;
  }
  async list () {
    try {
      var users = await this.db.query("SELECT * FROM tbl_user_master");
      if (!users) {
        return null;
      }
      return await users;
      } catch (error) {
        throw error;
    }
  }
}

module.exports = new UsersDB();