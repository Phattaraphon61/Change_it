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
io.on('connection', socket => {


    
    socket.on('listchat', ({id}) => {
        let n = 0;
        let y = 0;
        db.query(`SELECT * FROM roomchat WHERE iduser1 = ${id} OR iduser2 = ${id} `)
            .on('result', function (value) {
               if(value.iduser1 !== id){
                   lists.push({
                       id: value.idroom,
                       name: value.nameuser1
                   })
               }
               if(value.iduser2 !== id){
                lists.push({
                    id: value.idroom,
                    name: value.nameuser2
                })
            }
            }).on('end', function () {
                // console.log("ddd",lists)
                io.emit('listdata',{lists})
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