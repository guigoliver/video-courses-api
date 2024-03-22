const database = require('../models');

class UserController {
  static async getAll(req, res) {
    try {
      const usersList = await database.User.findAll();
      return res.status(200).json(usersList);
    } catch (error) {
            
    }
  }
}

module.exports = UserController;