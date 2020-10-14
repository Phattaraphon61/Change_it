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
var lists = []
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
                console.log("ddd",lists)
                io.emit('listdata',{lists})
                lists = []
                
            })
    })

    socket.on('getdata', ({ id, iduser }) => {
        db.query(`SELECT * FROM roomchat WHERE iduser1 = ${id} AND iduser2 = ${iduser} `)
            .on('result', function (value) {
                db.query(`SELECT * FROM Chat WHERE idroom = ${value.idroom} `)
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
        db.query(`SELECT * FROM roomchat WHERE iduser1 = ${iduser}  AND iduser2 =  ${id} `)
            .on('result', function (value) {
                db.query(`SELECT * FROM Chat WHERE idroom = ${value.idroom} `)
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