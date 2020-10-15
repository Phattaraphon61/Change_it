import React,{useState,useEffect} from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col, Card, CardBody, CardImg, Badge } from "shards-react";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import PageTitle from "../components/common/PageTitle";
import axios from "axios"
import jwt_decode from "jwt-decode";


export default function editproduct() {
    const [decoded, setdecoded] = useState()
    const [MyPosts, setMyPosts] = useState([{
        backgroundImage: "https://cf.shopee.co.th/file/c3ec88deff68e3bc52e3813caf1d3c2a",
        category: "เครื่องใช้ในบ้าน",
        categoryTheme: "warning",
        title: "หมอนแมวนุ่มฟู",
        id: "1"
    },])

    useEffect(() => {
        if (localStorage.usertoken !== undefined) {
            const token = localStorage.usertoken;
            const decoded = jwt_decode(token);
            setdecoded(decoded)
            let data = {
                id: decoded.id
              }
            axios.post("http://localhost:8080/geteditproduct",{data}).then(res => {
                console.log("dfdfdf",res.data)
                setMyPosts(res.data)
                
              })
          } else {
            // window.history.pushState(null, null, '/signin')
            window.location = "/signin"
          }
    }, [])


    const handleClick = (value) =>{
        console.log("editprudoct>" ,value)
        let data = {
            id: value
          }
        
            axios.post("http://localhost:8080/dataedit",{data}).then(res => {
                       console.log(res.data)
                       window.location = "/editproduct"
              
            })
          


    }
    return (
        <Container fluid className="main-content-container px-4" >
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle
                    sm="4"
                    title="แก้ไขสิ่งของของคุณ"
                    // subtitle="Components"
                    className="text-xs-left"
                />
            </Row>
            {/* {numdialog ? <Dialog/>:null} */}
            {/* <Dialog /> */}
            {/* First Row of Posts */}
            <Row >

                {MyPosts.map((post, idx) => (
                    <Col lg="3" md="6" sm="12" className="mb-4" style={{ cursor: "pointer" }} key={idx}  >
                        {/* <a href={`things/${post.id}`} style={{textDecoration:"none"}}> */}
                        <Card small className="card-post card-post--1"  >
                            <div
                                className="card-post__image"
                                style={{ backgroundImage: `url(${"http://localhost:8080/image/"+post.backgroundImage})` }}

                            >

                                <Badge
                                    pill
                                    className={`card-post__category bg-${post.categoryTheme}`}

                                >
                                    {post.category}
                                </Badge>
                            </div>
                            <CardBody >

                                <h5 className="card-title col-15 text-truncate">

                                    
                                        {post.title}
                                    
                                    <div style={{ marginLeft: "100px", marginTop: "20px" }}>
                                        <button type="button" class="btn btn-outline-danger" style={{ marginLeft: "20px" }} onClick={() => handleClick(post.id)}>ลบ</button>
                                    </div>

                                </h5>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
