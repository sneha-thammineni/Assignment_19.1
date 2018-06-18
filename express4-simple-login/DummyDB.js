var _db = [];

_db.push({
	username: 'sneha',
	password: 'password',
	email : 'snehaspandana21@gmail.com',
	first_name : 'Sneha',
	last_name : 'Spandana',
	id : '1'
});

var usersCollection = {
	createUser : function(user){
		user.id = _db.length + 1;
		_db.push(user);
		return user;
	},

	getUser : function(id){
		for (var i = 0; i < _db.length; i++) {
			var user = _db[i]; 
			if(user.id == id)
				return user
		};
	},

	getUsers : function(){
		return _db;
	}
}


module.exports = usersCollection