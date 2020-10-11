import axios from "axios"

const config = "http://localhost:8080";


export const signin = user=>{
  return axios.post(config+"/api/auth/signin",{
    email:user.email,
    password:user.password
  }).then(response => {
    if (response.data !== "password" && response.data !== undefined) {
        localStorage.setItem("usertoken", response.data);
        return response.data;
    }else {
        return response.data;
    }
    //
})
.catch(err => {
    return "err";
});
}
