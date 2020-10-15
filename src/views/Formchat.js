import React, { Component, useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Col } from "shards-react";
import '../shards-dashboard/styles/Chat.css'
import io from 'socket.io-client'
import Datachat from './Datachat'
import jwt_decode from "jwt-decode";

export default function Formchat(props) {
  const [decoded, setdecoded] = useState()
  const { id, ...rest } = props;
  const [data, setdata] = useState("")
  const socket = io.connect('http://localhost:3020')
  useEffect(() => {
    if (localStorage.usertoken !== undefined) {
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token)
      setdecoded(decoded)
    } else {
      // window.location = "/signin"
    }
  }, [])
  const summit = () => {

    let idusersend = decoded.id;
    if (id !== undefined & data !== "") {
      console.log("ggg", data)
      socket.emit("sendmge", { id, data, idusersend })
      setdata("")
      window.scrollTo(0, document.body.scrollHeight);
    }

  }

  const enter = (e) => {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }
  return (
    <div class="mesgs">
      <div class="msg_history">
        <Datachat id={id} />
      </div>


      <div class="type_msg">
        <div class="input_msg_write">
          <input type="text" className="write_msg" placeholder="Type a message" value={data} onChange={(e) => { setdata(e.target.value) }} onKeyPress={(ev) => {
            if (ev.key == 'Enter') {
              summit();
            }
          }} />
          <button class="msg_send_btn2" type="button"><i class="material-icons">wallpaper</i></button>
          <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane" aria-hidden="true" onClick={summit} ></i></button>
        </div>
      </div>
    </div>
  )
}
ReactDOM.render(<Formchat />, document.getElementById('root'));
