import React, { Component, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Col } from "shards-react";
import '../shards-dashboard/styles/Chat.css'
import io from 'socket.io-client'
import Datachat from './Datachat'

export default function Formchat(props) {
  const { id, ...rest } = props;
  const socket = io.connect('http://localhost:3020')

  console.log("ddd")
  return (
      <div class="mesgs">
        <div class="msg_history">
          <Datachat  id={id}/>
            </div>


            <div class="type_msg">
              <div class="input_msg_write">
                <input type="text" class="write_msg" placeholder="Type a message" />
                <button class="msg_send_btn2" type="button"><i class="material-icons">wallpaper</i></button>
                <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
              </div>
            </div>
      </div>
  )
}
ReactDOM.render(<Formchat />, document.getElementById('root'));
