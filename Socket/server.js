const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
var mysql = require('mysql')
var db = mysql.createConnection({
    host: 'change-it.tk',
    user: 'change-it',
    password: 'change-it',
    database: 'change-it'
})

var datachat = [];
var lists = [];
var mge = [];
var product = [];
io.on('connection', socket => {

    socket.on('getproduct',({getdata}) =>{
        db.query(`SELECT * FROM product`)
	.on('result',function(value){
        console.log(value.ownerid)
		db.query(`SELECT * FROM users WHERE id = ${value.ownerid}`)
		.on('result',function(data){
            console.log(data.name)
			db.query(`SELECT * FROM imageproduct WHERE idproduct = ${value.id} LIMIT 1 ` )
			.on('result',function(testdata){
                console.log("dddddd",testdata.name)
				product.push({
					backgroundImage: testdata.name ,
					category: value.type,
					categoryTheme: value.theme,
					author: data.name,
					authorAvatar: data.image,
					title: value.title,
					body: value.dis,
					date: value.city,
					id: value.id,
				  })

			}).on('end',function(){
                console.log("dd",product)
                io.emit("senddataproduct",{product})
                product = []
            })
			
		})
		
	}).on('end', function () {
        console.log("dfdfdfdf",product)
        // io.emit("senddataproduct",{product})
        // console.log("ddfdfdfdf")
        

	})

    })


    
    socket.on('listchat', ({id}) => {
        let n = 0;
        let y = 0;
        db.query(`SELECT * FROM roomchat WHERE iduser1 = ${id} OR iduser2 = ${id} `)
            .on('result', function (value) {
               if(value.iduser1 !== id){
                   lists.push({
                       idd:id,
                       id: value.idroom,
                       name: value.nameuser1
                   })
               }
               if(value.iduser2 !== id){
                lists.push({
                    idd: id,
                    id: value.idroom,
                    name: value.nameuser2
                })
            }
            }).on('end', function () {
                let idss = id;
                // console.log("ddd",lists)
                io.emit('listdata',{lists,idss})
                lists = []
                
            })
    })

    socket.on('getdata', ({ id, iduser }) => {
        console.log("ddd",id,iduser)
       
                db.query(`SELECT * FROM Chat WHERE idroom = ${id} `)
                .on('result',function(data){
                    datachat.push({
                        id: data.idusersend,
                        typevalue: data.typevalue,
                        value: data.value,
                        date: data.date,
                        
                    })
                }).on('end', function () {
                    io.emit("senddatachat", ({ datachat }))
                    datachat = []
                })

    })


    socket.on('sendmge',({id,data,idusersend})=>{
        console.log(id,data,idusersend)
    var sql = "INSERT INTO Chat (idroom,value,typevalue,date,idusersend) VALUES ?"
    var values = [id,data,"text","55",idusersend];
    db.query(sql, [[values]], function (err, result) {
        if (err) throw err;
        db.query(`SELECT * FROM Chat WHERE idroom = ${id} `)
        .on('result',function(data){
            datachat.push({
                id: data.idusersend,
                typevalue: data.typevalue,
                value: data.value,
                date: data.date,
                
            })
        }).on('end', function () {
            io.emit("senddatachat", ({ datachat }))
            datachat = []
        })

    })
        
    })
});
server.listen(3020);