const db = require('../database/dbConfig');

// module.exports = {
//     getUsers,
//     getUserById,
//     getBy,
//     addUser
//   };

//   function getUsers() {
//     return db('users').select('id', 'username');
//   }

//   function getUserById(id) {
//     return (
//       db('users')
//         // .select("id", "username")
//         .where(id)
//         .first()
//     );
//   }

//   function getBy(filter) {
//     return db('users').where(filter);
//   }

function addUser(user) {
	return db('users').insert(user).then((res) => {
		return { id: res[0] };
	});
}

function findBy(key) {
	return db('users').where(key).first();
}
module.exports = {
	addUser,
	findBy
};
