const env = {
  database: 'change-it',
  username: 'change-it',
  password: 'change-it',
  host: 'change-it.tk',
  dialect: 'mysql',
  pool: {
	  max: 10,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;
