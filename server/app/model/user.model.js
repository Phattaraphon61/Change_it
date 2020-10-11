module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		name: {
			type: Sequelize.STRING
		},
		username: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		},
		role: {
			type: Sequelize.STRING
		},
		lname: {
			type: Sequelize.STRING
		},
		address: {
			type: Sequelize.STRING
		},
		city: {
			type: Sequelize.STRING
		}
	});

	return User;
}