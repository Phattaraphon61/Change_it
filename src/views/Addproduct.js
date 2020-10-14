import React, { Component, useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import {
 
  Typography,

} from "@material-ui/core";
import axios from "axios"
import '../shards-dashboard/styles/Addproduct.css'
// import $ from "jquery"

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  '& .MuiTextField-root': {
    margin: theme.spacing(4),
    width: '25ch',
  },
}));

export default function Addproduct() {
  const [fileInputState, setFileInputState] = useState("");
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [currency, setCurrency] = React.useState('EUR');
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

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
      <Grid
        container
        justify="center"
        alignItems="center"
      >

        <br></br>
        <h1>เกี่ยวกับสิ่งของของฉัน</h1>
        <br></br>

        <Grid item xs={9}>
          <Paper className={classes.paper}>
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

          </Paper>
        </Grid>

      </Grid>
    </div>
  );


}