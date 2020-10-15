// import React from "react";
// import { Container, Row, Col } from "shards-react";

// import PageTitle from "../components/common/PageTitle";
// import UserDetails from "../components/user-profile-lite/UserDetails";
// import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

// const UserProfileLite = () => (
//   <Container fluid className="main-content-container px-4">
//     <Row noGutters className="page-header py-4">
//       <PageTitle title="เเก้ไขประวัติส่วนตัว"
//       // subtitle="Overview"
//        md="12" className="ml-sm-auto mr-sm-auto" />
//     </Row>
//     <Row>
//       <Col lg="4">
//         <UserDetails />
//       </Col>
//       <Col lg="8">
//         <UserAccountDetails />
//       </Col>
//     </Row>
//   </Container>
// );

// export default UserProfileLite;
import React, { useState, useEffect } from "react";
import PageTitle from "../components/common/PageTitle";

// import PageTitle from "../components/common/PageTitle";
// import UserDetails from "../components/user-profile-lite/UserDetails";
// import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
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
  Container,
  Button,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
} from "shards-react";
import axios from "axios"
import jwt_decode from "jwt-decode";
import BButton from '@material-ui/core/Button';

export default function UserProfileLite() {
  const [name, setname] = useState("decoded.name")
  const [lastname, setlastname] = useState("decoded.name")
  const [email, setemail] = useState("decoded.name")
  const [password, setpassword] = useState()
  const [address, setaddress] = useState("decoded.name")
  const [city, setcity] = useState("decoded.name")
  const [iduser, setiduser] = useState()
  const [decoded, setdecoded] = useState()
  const [userDetails, setuserDetails] = useState()
  const [urlimage, seturlimage] = useState()
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState([]);
  const [fileInputState, setFileInputState] = useState("");
  useEffect(() => {
    if (localStorage.usertoken !== undefined) {
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      setdecoded(decoded)
      seturlimage(decoded.image)
      setiduser(decoded.id)
      setname(decoded.name)
      setlastname(decoded.lname)
      setemail(decoded.email)
      setpassword('')
      setaddress(decoded.address)
      setcity(decoded.city)
      setuserDetails({
        name: `${decoded.name}  ${decoded.lname}`,
        avatar: `${decoded.image}`,
        jobTitle: "Project Manager",
        performanceReportTitle: "Workload",
        performanceReportValue: 74,
        metaTitle: "Description",
        metaValue:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
      })
    } else {
      // window.history.pushState(null, null, '/signin')
      window.location = "/signin"
    }
  }, [])
  // console.log("iddd",token)

  const summit = (value) => {
    console.log("value",value)
    let data = {
      id: iduser,
      name: name,
      lname: lastname,
      email: email,
      address: address,
      city: city,
      image:"http://localhost:8080/image/"+value
    }

    axios.post("http://localhost:8080/test", { data }).then(res => {
      // console.log("fffffffffff",res) 
      if (res.data !== "Erro" && res.data !== undefined) {
        localStorage.setItem("usertoken", res.data);
        window.location = '/editprofile';

      } else {
      }
    })
  }
  const summit2 = () => {
    let data = {
      id: iduser,
      name: name,
      lname: lastname,
      email: email,
      address: address,
      city: city,
      image: urlimage
    }

    axios.post("http://localhost:8080/test", { data }).then(res => {
      // console.log("fffffffffff",res) 
      if (res.data !== "Erro" && res.data !== undefined) {
        localStorage.setItem("usertoken", res.data);
        window.location = '/editprofile';

      } else {
      }
    })
  }
  const handleFileInputChange = e => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };
  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const uploadPicture = () => {
      if(selectedFile.length !== 0){
        let formData = new FormData();
        formData.append("selectedFile", selectedFile);
    
        axios.post("http://localhost:8080/image", formData).then(result => {
          summit(result.data)});
      }else{
        summit2()
      }

};
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle title="เเก้ไขประวัติส่วนตัว"
          // subtitle="Overview"
          md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="4">
          <Card small className="mb-4 pt-3">
            <CardHeader className="border-bottom text-center">
              <div className="mb-4 mx-auto">
                {previewSource.length !== 0 ? <img
                  style={{ width: "145px", height: "140px" }}
                  className="rounded-circle file-loading"
                  src={previewSource}
                  width="110"
                /> : <img
                    style={{ width: "145px", height: "140px" }}
                    className="rounded-circle file-loading"
                    src={urlimage}
                    width="110"
                  />}

                <BButton
                  style={{ marginLeft: "60px" }}
                  variant="outlined"
                  color="primary"
                  component="label"
                  // className={
                  //   classes.chooseImage
                  // }
                  onChange={e => {
                    handleFileInputChange(
                      e
                    );
                  }}
                  value={fileInputState}
                >
                  เลือกรูปภาพ
             <input
                    type="file"
                    style={{
                      display: "none"
                    }}
                  />
                </BButton>


                {/* <Badge >
          1
        </Badge> */}

              </div>
              {userDetails !== undefined ? <h4 className="mb-5">{userDetails.name}</h4> : <h4 className="mb-5">{""}</h4>}
              {/* <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span> */}
              {/* <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button> */}
            </CardHeader>
            {/* <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {userDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            value={userDetails.performanceReportValue}
          >
            <span className="progress-value">
              {userDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup> */}
          </Card>
        </Col>
        <Col lg="8">
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
                            onChange={(e) => { setname(e.target.value) }}
                          />
                        </Col>
                        {/* Last Name */}
                        <Col md="6" className="form-group">
                          <label htmlFor="feLastName">นามสกุล</label>
                          <FormInput
                            id="feLastName"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => { setlastname(e.target.value) }}
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
                            onChange={(e) => { setemail(e.target.value) }}
                            autoComplete="email"
                          />
                        </Col>
                        {/* Password */}
                        <Col md="6" className="form-group">

                          <label htmlFor="feAddress">ที่อยู่</label>
                          <FormInput
                            id="feAddress"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => { setaddress(e.target.value) }}
                          />

                          {/* <FormInput
                    type="password"
                    id="fePassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {setpassword(e.target.value)}}
                    autoComplete="current-password"
                  /> */}
                        </Col>
                      </Row>
                      {/* <FormGroup>
                <label htmlFor="feAddress">ที่อยู่</label>
                <FormInput
                  id="feAddress"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => {setaddress(e.target.value)}}
                />
              </FormGroup> */}
                      <Row form>
                        {/* City */}
                        <Col md="6" className="form-group">
                          <label htmlFor="feCity">จังหวัด</label>
                          <FormInput
                            id="feCity"
                            placeholder="City"
                            value={city}
                            onChange={(e) => { setcity(e.target.value) }}
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
                      <Button theme="accent" onClick={uploadPicture}>เเก้ไขข้อมูล</Button>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
