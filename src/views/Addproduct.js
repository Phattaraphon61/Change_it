import React, { Component, useEffect } from "react";
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
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
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChangetag = (event) => {
    setCurrency(event.target.value);
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