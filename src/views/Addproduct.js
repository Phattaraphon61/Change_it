import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {
  Typography
} from "@material-ui/core";
import axios from "axios"
import jwt_decode from "jwt-decode";

// import $ from "jquery"

const currencies = [
  {
    value: 'เลือกหมวดหมู่',
    label: 'เลือกหมวดหมู่',
  },
  {
    value: 'หนังสือ',
    label: 'หนังสือ',
    categoryTheme: "primary",
  },
  {
    value: 'ความงาม',
    label: 'ความงาม',
    categoryTheme: "info",
  },
  {
    value: 'เกม',
    label: 'เกม',
    categoryTheme: "royal-blue",
  },
  {
    value: 'มีเดีย',
    label: 'มีเดีย',
    categoryTheme: "warning",
  },
  {
    value: 'ของเล่น',
    label: 'ของเล่น',
    categoryTheme: "dark",
  },
  {
    value: 'เครื่องใช้ไฟฟ้า',
    label: 'เครื่องใช้ไฟฟ้า',
    categoryTheme: "secondary",
  },
  {
    value: 'แฟชั่นชาย',
    label: 'แฟชั่นชาย',
    categoryTheme: "success",
  },
  {
    value: 'อุปกรณ์อิเล็กทรอนิกส์',
    label: 'อุปกรณ์อิเล็กทรอนิกส์',
    categoryTheme: "light",
  },
  // {
  //   value: 'แฟชั่นผู้หญิง',
  //   label: 'แฟชั่นผู้หญิง',
  // },
  // {
  //   value: 'บ้านและสวน',
  //   label: 'บ้านและสวน',
  // },
  // {
  //   value: 'กลางแจ้ง',
  //   label: 'กลางแจ้ง',
  // },
  // {
  //   value: 'ฟิตเนส',
  //   label: 'ฟิตเนส',
  // },
];



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 500,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  '& .MuiTextField-root': {
    margin: theme.spacing(2),
    width: '25ch',
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  input: {
    display: 'none',
  },
}));


export default function Addproduct() {
  const [provincess, setProvincess] = useState([
    { title: 'กรุงเทพมหานคร' },
    { title: 'สมุทรปราการ' },
    { title: 'นนทบุรี' },
    { title: 'ปทุมธานี' },
    { title: 'พระนครศรีอยุธยา' },
    { title: 'อ่างทอง' },
    { title: 'ลพบุรี' },
    { title: 'สิงห์บุรี' },
    { title: 'ชัยนาท' },
    { title: 'สระบุรี' },
    { title: 'ชลบุรี' },
    { title: 'ระยอง' },
    { title: 'จันทบุรี' },
    { title: 'ตราด' },
    { title: 'ฉะเชิงเทรา' },
    { title: 'ปราจีนบุรี' },
    { title: 'นครนายก' },
    { title: 'สระแก้ว' },
    { title: 'นครราชสีมา' },
    { title: 'บุรีรัมย์' },
    { title: 'สุรินทร์' },
    { title: 'ศรีสะเกษ' },
    { title: 'อุบลราชธานี' },
    { title: 'ยโสธร' },
    { title: 'ชัยภูมิ' },
    { title: 'อำนาจเจริญ' },
    { title: 'หนองบัวลำภู' },
    { title: 'ขอนแก่น' },
    { title: 'อุดรธานี' },
    { title: 'เลย' },
    { title: 'หนองคาย' },
    { title: 'มหาสารคาม' },
    { title: 'ร้อยเอ็ด' },
    { title: 'กาฬสินธุ์' },
    { title: 'สกลนคร' },
    { title: 'นครพนม' },
    { title: 'มุกดาหาร' },
    { title: 'เชียงใหม่' },
    { title: 'ลำพูน' },
    { title: 'ลำปาง' },
    { title: 'อุตรดิตถ์' },
    { title: 'แพร่' },
    { title: 'น่าน' },
    { title: 'พะเยา' },
    { title: 'เชียงราย' },
    { title: 'แม่ฮ่องสอน' },
    { title: 'นครสวรรค์' },
    { title: 'อุทัยธานี' },
    { title: 'กำแพงเพชร' },
    { title: 'ตาก' },
    { title: 'สุโขทัย' },
    { title: 'พิษณุโลก' },
    { title: 'พิจิตร' },
    { title: 'เพชรบูรณ์' },
    { title: 'ราชบุรี' },
    { title: 'กาญจนบุรี' },
    { title: 'สุพรรณบุรี' },
    { title: 'นครปฐม' },
    { title: 'สมุทรสาคร' },
    { title: 'สมุทรสงคราม' },
    { title: 'เพชรบุรี' },
    { title: 'ประจวบคีรีขันธ์' },
    { title: 'นครศรีธรรมราช' },
    { title: 'กระบี่' },
    { title: 'พังงา' },
    { title: 'ภูเก็ต' },
    { title: 'สุราษฎร์ธานี' },
    { title: 'ระนอง' },
    { title: 'ชุมพร' },
    { title: 'สงขลา' },
    { title: 'สตูล' },
    { title: 'ตรัง' },
    { title: 'พัทลุง' },
    { title: 'ปัตตานี' },
    { title: 'ยะลา' },
    { title: 'นราธิวาส' },
    { title: 'บึงกาฬ' }
  ]);
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState([]);
  const [city, setcity] = useState()
  const classes = useStyles();
  const [nameproduct, setnameproduct] = useState("");
  const [nameimage, setnameimage] = useState([])
  const [currency, setCurrency] = useState('เลือกหมวดหมู่');
  const [age, setAge] = useState('');
  const [iduser, setiduser] = useState()
  const [dis, setdis] = useState()
  let nameimg = [];
  const bull = <span className={classes.bullet}>•</span>;
  useEffect(() => {
    if (localStorage.usertoken !== undefined) {
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      setiduser(decoded.id)
    } else {
      // window.history.pushState(null, null, '/signin')
      window.location = "/signin"
    }
  }, [])

  const handleChange = (event) => {
    setnameproduct(event.target.value);
  };
  const handleChangetag = (event) => {
    setCurrency(event.target.value);
  };

  const handleFileInputChange = e => {
    console.log(e.target.files)
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(prevent => Array.from(new Set([...prevent, file])));
    setFileInputState(e.target.value);
  };
  const previewFile = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(prevent => ([...prevent, reader.result]));
    };
  };

  const uploadPicture = () => {

    selectedFile.map((datas) => {
      let formData = new FormData();
      formData.append("selectedFile", datas);
      // console.log("gggggg",datas)
      axios.post("http://localhost:8080/image", formData).then(result => {
        result.data.map((value) => {
          // setnameimage(prevent => ([...prevent,value]))
          nameimg.push(value)
        })


      });


    })
    setTimeout(function () {
      adddata()
    }, 1000);




  };

  const adddata = () => {
    let data = {
      nameproduct: nameproduct,
      theme: "primary",
      dis: dis,
      currency: currency,
      provincess: city,
      id: iduser

    }
    axios.post("http://localhost:8080/addproduct", { data }).then(res => {
      addimage(res.data)
    })

  }

  const addimage = (id) => {

    nameimg.map((value) => {
      let data = {
        id: id,
        name: value
      }
      axios.post("http://localhost:8080/addimageproduct", { data }).then(res => {

      })
    })

  }

  const addproducts = () => {
    uploadPicture()

  }
  return (
    <div className={classes.root}>

      <br></br>
      <center><h2><b>สินค้าของฉัน</b></h2></center>
      <br></br>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="stretch"
      >
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <div >

                <center><h4><b>รายละเอียดสิ่งของ</b></h4></center>

                <TextField
                  style={{ width: "450px" }}
                  id="outlined-multiline-flexible"
                  label="ชื่อสินค้า (จำเป็น)"
                  multiline
                  rowsMax={5}
                  value={nameproduct}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
            </form>
            <br></br>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  style={{ width: "450px" }}
                  id="outlined-multiline-static"
                  label="รายละเอียดสินค้า (จำเป็น)"
                  multiline
                  value={dis}
                  rows={8}
                  onChange={e => { setdis(e.target.value) }}
                  variant="outlined"
                />
              </div>
            </form>
            <br></br>
            {/* <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="standard-textarea"
                  label="เพิ่มแฮชแท็ก (#Apple)"
                  placeholder=" "
                  multiline
                />
              </div>
            </form>

            <br></br> */}

            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="หมวดหมู่ (จำเป็น)"
                  value={currency}
                  onChange={handleChangetag}
                  helperText="กรุณาเลือกหมวดหมู่เพื่อการค้นหาที่สะดวกมากยิ่งขึ้น"
                  variant="outlined"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </form>

            <br></br>

            <FormControl variant="outlined" className={classes.formControl}>
              ที่อยู่ของสิ่งของ (จำเป็น)
        <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
              <br></br>
              <Autocomplete
                style={{ width: "250px" }}
                fullWidth name="province"
                id="demo-simple-select-outlined"
                options={provincess}
                onChange={option => { setcity(option.target.innerText) }}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} label="จังหวัด" variant="outlined" />}
                label="จังหวัด"
              >
              </Autocomplete>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <center><h4><b>อัพโหลดรูปภาพ</b></h4></center>
            <Card className={classes.root} variant="outlined">

              <Typography align="center">
                {previewSource.map((data) => (
                  data !== "" ? (
                    <img
                      src={data}
                      width="200"
                      height='200'
                    ></img>
                  ) : (
                      <div></div>
                    )
                ))}

              </Typography>

              <CardActions>

              </CardActions>
              {/* <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                /> */}

              <label htmlFor="contained-button-file">
                <Button
                  variant="outlined"
                  color="primary"
                  component="label"
                  className={
                    classes.chooseImage
                  }
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
              </label>

            </Card>
            <br></br>
            <Button variant="contained" color="secondary" href="#contained-buttons" onClick={addproducts}>
              ส่งข้อมูลสินค้า
              </Button>
            <p>________________</p>
            <p><mark>Attention !</mark> : กรุณาเช็คความถูกต้องก่อนกดส่งข้อมูลสินค้า</p>
          </Paper>
        </Grid>

        <Grid item xs={10}>
          <br></br>
          <center><h4><b><ins>WARNING !!!</ins></b></h4></center>
          <Paper className={classes.paper}>
            <p><b>________________ ข้อควรระวังเกี่ยวกับการแลกเปลี่ยน ________________</b></p>
            <p>เพื่อปกป้องสิทธิของคุณเราขขอแนะนำให้คุณมีการเจรจาซื้อขายที่นี่และตรวจสอบให้แน่ใจว่าให้ข้อมูลเกี่ยวกับการแลกเปลี่ยนที่เพียงพอ
            หากคุณใช้โปรแกรมสนทนาอื่นนอกเหนือจากที่นี่ เราจะไม่สามารถบันทึกกระบวนการแลกเปลี่ยนทั้งหมดของคุณได้อย่างสมบรูณ์
            จึงขอความร่วมมือมา ณ ที่นี้ </p>
          ___________________________________________________________________
          </Paper>
        </Grid>

      </Grid>
      <br></br>
    </div>

  );
}