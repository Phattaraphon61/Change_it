import React, { useEffect, useState } from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

import { createMuiTheme, useTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import DeleteIcon from '@material-ui/icons/Delete';
import { green, purple } from '@material-ui/core/colors';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import axios from "axios"
import { set } from 'react-ga';
import { Category } from '@material-ui/icons';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
        imgPath:
            'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 800,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: "auto",
        display: 'block',
        maxWidth: 800,
        overflow: 'hidden',
        width: '100%',
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});
export default function Showproduct() {

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [tutorialSteps, setTutorialSteps] = React.useState([
        {
            label: 'San Francisco – Oakland Bay Bridge, United States',
            imgPath:
                'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
    ])
    const [name, setname] = useState()
    const [city, setcity] = useState()
    const [nameproduct, setnameproduct] = useState()
    const [urlimageuser, seturlimageuser] = useState()
    const [dis, setdis] = useState()
    const [category, setcategory] = useState()
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {

        let data = {
            id: window.location.href.split('/')[4]
        }
        axios.post("http://localhost:8080/showproduct", { data }).then(res => {
            console.log("dfdfdfgggggggggg", res.data)
            setname(res.data[0].author)
            setcity(res.data[0].date)
            setnameproduct(res.data[0].title)
            seturlimageuser(res.data[0].authorAvatar)
            setdis(res.data[0].body)
            setcategory(res.data[0].category)


axios.post("http://localhost:8080/showproductimage", { data }).then(res => {
    console.log("imagesssss",res.data)
    setTutorialSteps(res.data)


})
        })
    }, [])

    const offer = () =>{
      window.location = "/offer/"+window.location.href.split('/')[4]
        
    }
    return (


        <div class="row align-items-center">

            <div class="container">
                <div class="row align-items-center">

                    <div class="col-1">
                        <div>
                            <br />
                        </div>
                    </div>

                    <div class="col card">
                        <div style={{ marginTop: "20px" }}>
                            <img class="rounded-circle" src={urlimageuser} alt="Generic placeholder image" style={{ width: "10%", height: "80px" }} />
                        </div>
                        <div class="media-body" style={{ marginLeft: "20px" }}>
                            <h3 class="mt-0">{name}</h3>
                            <p>{city}</p>
                            <h1>{nameproduct}</h1>
                        </div>
                        <div className={classes.root} style={{ marginLeft: "50px" }}>
                            <Paper square elevation={0} className={classes.header}>
                                {/* <Typography>{tutorialSteps[activeStep].label}</Typography> */}
                            </Paper>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {tutorialSteps.map((step, index) => (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <img className={classes.img} src={"http://localhost:8080/image/"+step.imgPath} alt={step.label} style={{height:"450px"}} />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                variant="text"
                                activeStep={activeStep}
                                nextButton={
                                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                        Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
                                }
                            />
                        </div>
                        <div class="card">
                            <Row>
                                <div class="col-9">
                                    <div style={{ marginLeft: "20px", marginTop: "20px" }} >
                                        <h1>รายละเอียด</h1>
                                        <p>{dis}</p>
                                    </div>
                                    <div style={{ marginLeft: "20px", marginBottom: "50px" }}>
                            <button type="button" class="btn btn-outline-primary">{category}</button>
                                    </div>


                                </div>
                                <div class="col-3" style={{ marginTop: "90px" }}>

                                    {/* <Card style={{ marginTop: "30px",marginBottom:"30px" , marginRight: "30px", width: "180px", height: "180px" }}>
                                        {/* <CardImg top src="https://place-hold.it/150x100" /> */}
                                    {/* <CardBody>
                                            <h5 style={{ textAlign:"center"}}>ยื่นข้อเสนอ</h5>
                                        </CardBody>
                                    </Card>  */}

                                   
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            startIcon={<TouchAppIcon />}
                                            style={{ padding: "20px", width: "150px" }}
                                            onClick={offer}
                                        >ยื่นข้อเสนอ</Button>
                                    {/* <button type="button" >ยื่นข้อเสนอ</button> */}
                                </div>
                            </Row>




                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <button type="button" class="btn btn-outline-primary">ดูเพิ่มเติม</button>
                        </div>
                        <div class="card" style={{ marginTop: "20px", marginBottom: "20px" }}>
                            <Row style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "20px", marginRight: "20px" }}>
                                <Col>
                                    <Card>
                                        <CardImg top src="https://place-hold.it/150x100" />
                                        <CardBody>
                                            <p>This is the body of the card.</p>
                                        </CardBody>
                                    </Card></Col>
                                <Col>
                                    <Card>
                                        <CardImg top src="https://place-hold.it/150x100" />
                                        <CardBody>
                                            <p>This is the body of the card.</p>
                                        </CardBody>
                                    </Card></Col>
                                <Col>
                                    <Card>
                                        <CardImg top src="https://place-hold.it/150x100" />
                                        <CardBody>
                                            <p>This is the body of the card.</p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                        </div>

                    </div>


                    <div class="col-1">
                        <div>
                            <br />
                        </div>
                    </div>


                </div>
            </div>








        </div >







    )
}
