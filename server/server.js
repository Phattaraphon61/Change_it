var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json())
var mysql = require('mysql')
var dbs = mysql.createConnection({
    host: 'change-it.tk',
    user: 'change-it',
    password: 'change-it',
    database: 'change-it'
})
require('./app/router/router.js')(app);

const db = require('./app/config/db.config.js');

const Role = db.role;



app.post("/test", (req, res) => {
	const dbss = require('./app/config/db.config.js');
	const User = dbss.user;
	var jwt = require('jsonwebtoken');
	process.env.SECRET_KEY = "secret";

	
	var bcrypt = require('bcryptjs');
	// let pass = bcrypt.hashSync(req.body.data.password, 8)
	dbs.query(`UPDATE users SET name = '${req.body.data.name}',email = '${req.body.data.email}',lname = '${req.body.data.lname}', address = '${req.body.data.address}',city = '${req.body.data.city}'  WHERE id = '${req.body.data.id}'`)
	.on('end', function () {
		dbs.query(`UPDATE roomchat SET nameuser1 = '${req.body.data.name}'  WHERE iduser1 = ${req.body.data.id} `)
		dbs.query(`UPDATE roomchat SET nameuser2 = '${req.body.data.name}'  WHERE iduser2 = ${req.body.data.id} `)
		User.findOne({
			where: {
				id: req.body.data.id
			}
		}).then(user => {
			if (!user) {
				return res.status(404).send('User Not Found.');
			}
			var token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
			  expiresIn: 86400 // expires in 24 hours
			});
			res.send(token);
		}).catch(err => {
			res.status(500).send('Erro');
		});
	})
  });


 

  
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });
 
//require('./app/route/project.route.js')(app);
 
// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})


function initial(){
	// Role.create({
	// 	id: 1,
	// 	name: "USER"
	// });
	
	// Role.create({
	// 	id: 2,
	// 	name: "ADMIN"
	// });
	
	// Role.create({
	// 	id: 3,
	// 	name: "PM"
	// });
}