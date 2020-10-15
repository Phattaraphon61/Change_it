<<<<<<< HEAD
import React, { Component, useEffect ,useState} from "react";
=======
import React, { Component, useEffect, useState } from "react";
>>>>>>> 504d881041652bc479a2b3914f579c39ee3d4e7c
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
<<<<<<< HEAD
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
=======
import Button from "@material-ui/core/Button";
import {
 
  Typography,

} from "@material-ui/core";
import axios from "axios"
>>>>>>> 504d881041652bc479a2b3914f579c39ee3d4e7c
import '../shards-dashboard/styles/Addproduct.css'
// import $ from "jquery"

const currencies = [
  {
    value: 'plzselect',
    label: 'เลือกหมวดหมู่',
  },
  {
    value: 'Book',
    label: 'หนังสือ',
  },
  {
    value: 'Bueaty',
    label: 'ความงาม',
  },
  {
    value: 'game',
    label: 'เกม',
  },
  {
    value: 'Media',
    label: 'มีเดีย',
  },
  {
    value: 'Toys',
    label: 'ของเล่น',
  },
  {
    value: 'Electrical',
    label: 'เครื่องใช้ไฟฟ้า',
  },
  {
    value: 'MenFashion',
    label: 'แฟชั่นชาย',
  },
  {
    value: 'Electronic',
    label: 'อุปกรณ์อิเล็กทรอนิกส์',
  },
  {
    value: 'WomenFashion',
    label: 'แฟชั่นผู้หญิง',
  },
  {
    value: 'HomeAndGarden',
    label: 'บ้านและสวน',
  },
  {
    value: 'Outdoor',
    label: 'กลางแจ้ง',
  },
  {
    value: 'Fitness',
    label: 'ฟิตเนส',
  },
];



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 275,
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
<<<<<<< HEAD
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
    { title: 'พัทลุง'   },
    { title: 'ปัตตานี' },
    { title: 'ยะลา' },
    { title: 'นราธิวาส' },
    { title: 'บึงกาฬ' }
  ]);
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [currency, setCurrency] = React.useState('plzselect');
  const [age, setAge] = React.useState('');
  const bull = <span className={classes.bullet}>•</span>;
=======
  const [fileInputState, setFileInputState] = useState("");
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [currency, setCurrency] = React.useState('EUR');
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
>>>>>>> 504d881041652bc479a2b3914f579c39ee3d4e7c

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangetag = (event) => {
    setCurrency(event.target.value);
  };

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
    let formData = new FormData();
    formData.append("selectedFile", selectedFile);

    axios.post("http://localhost:8080/image", formData).then(result => {});
  
};
  return (
    <div className={classes.root}>
<<<<<<< HEAD
=======
      <Grid
        container
        justify="center"
        alignItems="center"
      >
>>>>>>> 504d881041652bc479a2b3914f579c39ee3d4e7c

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
<<<<<<< HEAD
          <form className={classes.root} noValidate autoComplete="off">
      <div>

      <center><h4><b>คำอธิบายสินค้า</b></h4></center>

      <TextField
          id="outlined-multiline-flexible"
          label="ชื่อสินค้า (จำเป็น)"
          multiline
          rowsMax={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        </div>
    </form>
    <br></br>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
          id="outlined-multiline-static"
          label="รายละเอียดสินค้า (จำเป็น)"
          multiline
          rows={4}
          variant="outlined"
        />
      </div>
    </form>
    <br></br>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
    <TextField
          id="standard-textarea"
          label="เพิ่มแฮชแท็ก (#Apple)"
          placeholder=" "
          multiline
        />
         </div>
    </form>

    <br></br>
    
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
=======
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="ชื่อสินค้า (จำเป็น)"
                  multiline
                  rowsMax={4}
                  value={value}
                  onChange={handleChange}
                  variant="outlined"
                />
              </div>
              <Typography align="center">
                {previewSource !== "" ? (
                  <img
                    src={previewSource}
                    width="170"
                  ></img>
                ) : (
                    <div></div>
                  )}
              </Typography>
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

              <Button onClick={uploadPicture}> sende</Button>
            </form>
            <br></br>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="รายละเอียดสินค้า (จำเป็น)"
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </div>
            </form>
            <br></br>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="standard-textarea"
                  label="เพิ่มแฮชแท็ก (#Apple)"
                  placeholder="Placeholder"
                  multiline
                />
              </div>
            </form>

            <br></br>

            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Select"
                  value={currency}
                  onChange={handleChangetag}
                  helperText="Please select your currency"
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
>>>>>>> 504d881041652bc479a2b3914f579c39ee3d4e7c

    <br></br>

    <FormControl variant="outlined" className={classes.formControl}>
    ที่อยู่ของสิ่งของ (จำเป็น)
        <InputLabel id="demo-simple-select-outlined-label"></InputLabel>
        <br></br>
        <Autocomplete
          fullWidth name="province"
          id="demo-simple-select-outlined"
          options={provincess}
          onChange={option => {console.log(option.target.innerText)}}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => <TextField {...params} label="จังหวัด" variant="outlined" />}
          label="จังหวัด"
        >
        </Autocomplete>
      </FormControl>
          </Paper>
        </Grid>
<<<<<<< HEAD
        <Grid item xs={5}>
          <Paper className={classes.paper}>
          <center><h4><b>อัพโหลดรูปภาพ</b></h4></center>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              Upload Your Product Image
            </CardContent>
        
          <CardActions>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
        
          <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                อัพโหลด
              </Button>
          </label>
          </CardActions>
        </Card>
            <br></br>
        <Button variant="contained" color="secondary" href="#contained-buttons">
                ส่งข้อมูลสินค้า
              </Button>
              <p>________________</p>
              <p>Attention ! : กรุณาเช็คความถูกต้องก่อนกดส่งข้อมูลสินค้า</p>
          </Paper>
        </Grid>

        <Grid item xs={10}>
          <br></br>
          <center><h4><b>WARNING !!!</b></h4></center>
          <Paper className={classes.paper}>
          <p><b>________________ ข้อควรระวังเกี่ยวกับการแลกเปลี่ยน ________________</b></p>
          <p>เพื่อปกป้องสิทธิของคุณเราขขอแนะนำให้คุณมีการเจรจาซื้อขายที่นี่และตรวจสอบให้แน่ใจว่าให้ข้อมูลเกี่ยวกับการแลกเปลี่ยนที่เพียงพอ 
หากคุณใช้โปรแกรมสนทนาอื่นนอกเหนือจากที่นี่ เราจะไม่สามารถบันทึกกระบวนการแลกเปลี่ยนทั้งหมดของคุณได้อย่างสมบรูณ์
จึงขอความร่วมมือมา ณ ที่นี้ </p>
          ___________________________________________________________________
          </Paper>
        </Grid>
=======
>>>>>>> 504d881041652bc479a2b3914f579c39ee3d4e7c

      </Grid>
      <br></br>
    </div>

<<<<<<< HEAD
  );
=======

>>>>>>> 504d881041652bc479a2b3914f579c39ee3d4e7c
}