import React, { useState,useEffect } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";
import Button from '@material-ui/core/Button';
import axios from "axios"
import {
    Typography
} from "@material-ui/core";

import jwt_decode from "jwt-decode";

export default function Offer() {
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState([]);
    const [fileInputState, setFileInputState] = useState("");
    const [textoffer, settextoffer] = useState()
    const [iduser, setiduser] = useState()
    const [decoded, setdecoded] = useState()
    console.log("ddd",textoffer)
    
    
    useEffect(() => {
        if (localStorage.usertoken !== undefined) {
            const token = localStorage.usertoken;
            const decoded = jwt_decode(token);
            setdecoded(decoded)
            setiduser(decoded.id)
          } else {
            // window.history.pushState(null, null, '/signin')
            window.location = "/signin"
          }
    }, [])
    
    const summit = (value) => {
        console.log("valueeeeee", value[0],window.location.href.split('/')[4])
        let data = {
            idproduct: window.location.href.split('/')[4]
        }

        axios.post("https://commath-phattaraphon.tk/chaeckownerid", { data }).then(res => {
            console.log("fffffffffff",res.data)
            let datas = {
                idproduct: window.location.href.split('/')[4],
                idoffer : decoded.id,
                image: value[0],
                dis:textoffer,
                ownerid:res.data
            }
    
            axios.post("https://commath-phattaraphon.tk/offer", { datas }).then(res => {
    
                
            })
            
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
        if (selectedFile.length !== 0) {
            let formData = new FormData();
            formData.append("selectedFile", selectedFile);

            axios.post("https://commath-phattaraphon.tk/image", formData).then(result => {
                summit(result.data)
            });
        } else {
        }

    };
    return (
        <div class="row align-items-center">

            <div class="container">
                <div class="row align-items-center">

                    <Container fluid style={{ marginTop: "100px" }} className="main-content-container px-4">
                        <Row noGutters className="page-header py-4">
                            <div class="col card">
                                <div class="card">
                                    <Row>
                                        <div class="col-9">
                                            <div style={{ marginLeft: "30px", marginTop: "160px", marginInlineEnd: "40px", marginBottom: "180px" }} >
                                                <h3 style={{ marginLeft: "440px" }}>ยื่นข้อเสนอ</h3>
                                                {previewSource.length !== 0 ? <img
                                                    style={{ width: "200px", height: "250px",marginLeft:"440px" }}
                                                
                                                    src={previewSource}
                                                    width="110"
                                                /> : <di></di>}
                                                <Button
                                                    style={{ marginBottom: "20px", marginLeft: "455px" }}
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
                                                </Button>
                                                <h5 style={{ marginLeft: "340px", marginTop: "10px", marginInlineEnd: "10px" }}> ภาพสิ่งที่คุณจะนำมาแลกเพื่อยื่นข้อเสนอ </h5>
                                                <p style={{ marginLeft: "405px" }}>รายละเอียดสิ่งของที่จะยื่นข้อเสนอ</p>
                                                <div class="form-group">
                                                    <textarea style={{ marginLeft: "130px" }} class="form-control" id="exampleFormControlTextarea1" rows="3" value={textoffer} onChange={e =>{settextoffer(e.target.value)}}></textarea>
                                                </div>
                                                <button type="button" class="btn btn-outline-primary" style={{ marginLeft: "460px", }} onClick={uploadPicture} >ยื่นข้อเสนอ</button>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </div>
                        </Row>
                    </Container>

                </div>
            </div>
        </div >
    )
}
