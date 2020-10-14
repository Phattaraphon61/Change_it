import React, { useState,useEffect } from "react";
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

  import {registers} from "../function/register"

export default function Register() {
    const [username, setusername] = useState()
    const [name, setname] = useState()
    const [lastname, setlastname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [address, setaddress] = useState()
    const [city, setcity] = useState()



    const Registers = () =>{
        let data = {
            name: name,
            username:username,
            email: email,
            password: password,
            lname:lastname,
            address:address,
            city:city,
           
          }
          registers(data).then(res => {
            if (res === "successfully!"){
                window.location = '/signin'
            }else{

            }
          })
    }

    return (
        
        <Card small className="mb-4"  style={{marginTop:"250px",width:"1000px",marginLeft:"250px"}} >
    <CardHeader className="border-bottom">
      <h6 className="m-2" >{"สมัครสมาชิก"}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-6">
        <Row>
          <Col>
          <FormGroup>
                <label htmlFor="username">ชื่อผู้ใช้งาน</label>
                <FormInput
                  id="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => {setusername(e.target.value)}}
                />
              </FormGroup>
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
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">รหัสผ่าน</label>
                  <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {setpassword(e.target.value)}}
                    autoComplete="current-password"
                  />
                </Col>
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
              <Button theme="accent" style={{marginLeft:"400px"}} onClick={Registers}>สมัครสมาชิก</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
    )
}
