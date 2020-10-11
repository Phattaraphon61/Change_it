import React, { Component,useState } from "react";
import {Col } from "shards-react";
import {signin} from "../function/signin"
import jwt_decode from "jwt-decode";

// import {useNavigate} from "react-router-dom";

export default function Signin() {
const [email, setemail] = useState()
const [password, setpassword] = useState()
// const navigate = useNavigate();


  const senddata = ()=>{
    let data = {
      email:email,
      password:password
    }
    signin(data).then(res => {
      console.log(res)
      if (res !== "err" && res !== "password") {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        if (decoded.role == "USER") {
          // window.open("/things");
          window.location = 'http://localhost:3000/things';
        } else if (decoded.role == "Admin") {
            // navigate("/admin/dashboard");
        }
    }else{
      window.location = 'http://localhost:3000/singin';
    }
    }
      // navigate("/things")
    )
  }
  return (
              // <Col lg="4" >
              <div class="d-flex justify-content-center" style={{marginTop:"250px"}}>
              <Col lg="3" >

                <h3 class="d-flex justify-content-center">เข้าสู่ระบบ</h3>

                <div className="form-group">
                    <label>อีเมล</label>
                    <input type="email" className="form-control" placeholder="กรอกอีเมล" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                </div>

                <div className="form-group">
                    <label>รห้สผ่าน</label>
                    <input type="password" className="form-control" placeholder="กรอกรหัสผ่าน" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                </div>
{/*
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div> */}

                <button type="submit" className="btn btn-primary btn-block" onClick={senddata}>ยืนยัน</button>
                <p className="forgot-password text-right">
                    ลืม <a >รหัสผ่าน?</a>
                </p>

            </Col>
            </div>
            // </Col>
  )
}
