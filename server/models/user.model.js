var db = require('../config/database.connect')

var user={
    getAllUser:function(callback){
        return db.query("Select * from user", callback);
    }
}
module.exports=user