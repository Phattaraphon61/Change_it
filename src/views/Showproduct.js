import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Container, Row, Col, Card, CardBody, CardImg } from "shards-react";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
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
export default function Showproduct() {

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
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
    return (


        <div class="container" >
            <div class="row ">

                <div class="card">

                    <div class="col-lg-12 card">
                        <div style={{ marginTop: "20px" }}>
                            <img class="rounded-circle" src="https://www.w3schools.com/html/img_girl.jpg" alt="Generic placeholder image" style={{ width: "10%" }} />
                        </div>
                        <div class="media-body" style={{ marginLeft: "20px" }}>
                            <h1 class="mt-0">User name</h1>
                            <p>ที่อยู่ แล้วแต่จะคิด ทำไมต้องถาม</p>
                            <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        </div>

                        {/* <Carousel style={{width:"50%", height:"2px"}}>
                                <div style={{height:"500px"}}>
                                    <img src="http://localhost:8080/image/test.jpg" />
                                    <p className="legend">Legend 1</p>
                                </div>
                                <div style={{height:"500px"}}>
                                    <img src="https://cf.shopee.co.th/file/e0327cba4a5e41a8e405b1fd721a4939" />
                                    <p className="legend">Legend 2</p>
                                </div>
                                <div style={{height:"500px"}}>
                                    <img src="https://xn--b3c2cb3bb3c3dbe6i.net/wp-content/uploads/2016/08/800x400-009.png" />
                                    <p className="legend">Legend 3</p>
                                </div>
                            </Carousel> */}
                            
                        <div className={classes.root} style={{ marginLeft: "150px" }}>
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
                                            <img className={classes.img} src={step.imgPath} alt={step.label} />
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
                            <div style={{ marginLeft: "20px", marginTop: "20px" }} >
                                <h1>รายละเอียด</h1>
                                <p>1.สิ่งที่ต้องการนำเสนอ ผู้พัฒนาจะต้องเตรียมข้อมูลต่างๆ project change-it</p>
                            </div>
                            <div style={{ marginLeft: "20px", marginBottom: "50px" }}>
                                <button type="button" class="btn btn-outline-primary">ของใช้ในบ้าน</button>
                                <button type="button" class="btn btn-outline-primary" style={{ marginLeft: "20px" }}>เครื่องมือ</button>
                                <button type="button" class="btn btn-outline-primary" style={{ marginLeft: "20px" }}>อุปกรณ์เสริม</button>
                            </div>

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
                </div>
            </div>
        </div>









    )
}
