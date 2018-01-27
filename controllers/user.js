var user = require("./userController.js");
var _ = require('lodash');

let getUserList =  async (req,res)=>{
    let userlist = await user.list();
    const value = _.find(userlist, prop => prop.id === 'peter');
    res.json(userlist);   
}

module.exports = {
    getUserList: getUserList
} 

