var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require("multer");
app.use(cors());
app.use(bodyParser.json())
var mysql = require('mysql')
var path = require('path');
const { v4: uuidv4 } = require('uuid');
var dbs = mysql.createConnection({
	host: 'change-it.tk',
	user: 'change-it',
	password: 'change-it',
	database: 'change-it'
})
require('./app/router/router.js')(app);

const db = require('./app/config/db.config.js');
const Role = db.role;
let imagename = []
const storage = multer.diskStorage({
	destination: (req, file, cb) => {

		cb(null, "./uploads");
	},
	filename: (req, file, cb) => {
		//   console.log("ggg",file)
		let nameimage = uuidv4();
		imagename.push(nameimage + ".jpg")
		//   const newFilename = file.name+"."+"jpg";
		cb(null, nameimage + ".jpg");
	},
});

const upload = multer({ storage });

app.post("/image", upload.single("selectedFile"), (req, res) => {
	// console.log("ddd",imagename)
	res.json(imagename)

	imagename = []
});

app.use('/image/:name', function (req, res) {
	res.sendFile(path.resolve(__dirname, `./uploads/${req.params.name}`));
})

app.post("/addimageproduct", (req, res) => {

	var sql = "INSERT INTO imageproduct (idproduct,name) VALUES ?"

	var values = [`${req.body.data.id}`, `${req.body.data.name}`];
	dbs.query(sql, [[values]], function (err, result) {
		if (err) throw err;
		res.json("เรียบร้อย")
	})

});





app.post("/addproduct", (req, res) => {

	var sql = "INSERT INTO product (type,theme,title,dis,city,ownerid) VALUES ?"

	var values = [`${req.body.data.currency}`, `${req.body.data.theme}`, `${req.body.data.nameproduct}`, `${req.body.data.dis}`, `${req.body.data.provincess}`, `${req.body.data.id}`];
	dbs.query(sql, [[values]], function (err, result) {
		if (err) throw err;
		dbs.query(`SELECT * FROM product WHERE ownerid  = '${req.body.data.id}' ORDER BY id DESC LIMIT 1`)
			.on('result', function (value) {
				res.json(value.id)
			})
	})

});


app.post("/test", (req, res) => {
	const dbss = require('./app/config/db.config.js');
	const User = dbss.user;
	var jwt = require('jsonwebtoken');
	process.env.SECRET_KEY = "secret";


	var bcrypt = require('bcryptjs');
	// let pass = bcrypt.hashSync(req.body.data.password, 8)
	dbs.query(`UPDATE users SET name = '${req.body.data.name}',email = '${req.body.data.email}',lname = '${req.body.data.lname}', address = '${req.body.data.address}',city = '${req.body.data.city}',image = '${req.body.data.image}'  WHERE id = '${req.body.data.id}'`)
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


function initial() {
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