import axios from "axios"

const config = "https://commath-phattaraphon.tk";


export const registers = user=>{
    console.log("dddddddddddddddddddddddddddddd",user)
  return axios.post(config+"/api/auth/signup",{
    // name: user.name,
    // username: user.username,
    // email: user.email,
    // password: user.password,
    // role: "USER",
    // lname: user.lastname,
    // address: user.address,
    // city: user.city,
    // roles:["user"]
    
        "name": `${user.name}`,
        "username":`${user.username}`,
        "email": `${user.email}`,
        "password": `${user.password}`,
        "role":"USER",
        "lname":`${user.lname}`,
        "address": `${user.address}`,
        "city":`${user.city}`,
        "roles":["user"],
        "image":"https://commath-phattaraphon.tk/image/avatar.png",

    
  }).then(response => {
   return response.data
    //
})
.catch(err => {
    return "err";
});
}