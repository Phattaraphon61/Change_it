import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";
import axios from "axios"
import jwt_decode from "jwt-decode";

export default function UserAccountDetails() {
  const [name, setname] = useState("decoded.name")
  const [lastname, setlastname] = useState("decoded.name")
  const [email, setemail] = useState("decoded.name")
  const [password, setpassword] = useState()
  const [address, setaddress] = useState("decoded.name")
  const [city, setcity] = useState("decoded.name")
  const [iduser, setiduser] = useState()
  useEffect(() => {
    if(localStorage.usertoken !== undefined){
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      setiduser(decoded.id)
      setname(decoded.name)
      setlastname(decoded.lname)
      setemail(decoded.email)
      setpassword('')
      setaddress(decoded.address)
      setcity(decoded.city)
    }else{
      // window.history.pushState(null, null, '/signin')
      window.location = "/signin"
    }  
  }, [])
  // console.log("iddd",token)


  const summit = () =>{
    let data = {
      id: iduser,
      name: name,
      lname: lastname,
      email: email,
      address:address,
      city : city,
    }
    
    axios.post("http://localhost:8080/test",{data}).then(res =>{
      // console.log("fffffffffff",res) 
      if (res.data !== "Erro" && res.data !== undefined) {
        localStorage.setItem("usertoken", res.data);
        window.location = '/editprofile';
        
    }else {
    }
    })
  }
 
  return (
<Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{"ข้อมูลส่วนตัว"}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feFirstName">ชื่อ</label>
                  <FormInput
                    id="feFirstName"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => {setname(e.target.value)}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="6" className="form-group">
                  <label htmlFor="feLastName">นามสกุล</label>
                  <FormInput
                    id="feLastName"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => {setlastname(e.target.value)}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">อีเมล</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {setemail(e.target.value)}}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                {/* <Col md="6" className="form-group">
                  <label htmlFor="fePassword">รหัสผ่าน</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {setpassword(e.target.value)}}
                    autoComplete="current-password"
                  />
                </Col> */}
              </Row>
              <FormGroup>
                <label htmlFor="feAddress">ที่อยู่</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => {setaddress(e.target.value)}}
                />
              </FormGroup>
              <Row form>
                {/* City */}
                <Col md="6" className="form-group">
                  <label htmlFor="feCity">จังหวัด</label>
                  <FormInput
                    id="feCity"
                    placeholder="City"
                    value={city}
                    onChange={(e) => {setcity(e.target.value)}}
                  />
                </Col>
                {/* State */}
                {/* <Col md="4" className="form-group">
                  <label htmlFor="feInputState"></label>
                  <FormSelect id="feInputState">
                    <option>Choose...</option>
                    <option>...</option>
                  </FormSelect>
                </Col> */}
                {/* Zip Code */}
                {/* <Col md="2" className="form-group">
                  <label htmlFor="feZipCode">Zip</label>
                  <FormInput
                    id="feZipCode"
                    placeholder="Zip"
                    onChange={() => {}}
                  />
                </Col> */}
              </Row>
              <Row form>
                {/* Description */}
                {/* <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col> */}
              </Row>
              <Button theme="accent" onClick={summit}>Update Account</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
  )
}
