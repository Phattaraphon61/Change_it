import React, { Component, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Col } from "shards-react";
import '../shards-dashboard/styles/Chat.css'
import io from 'socket.io-client'

export default function Formchat(props) {
  const { id, ...rest } = props;
  const socket = io.connect('http://localhost:30')


  console.log("ddd")
  return (
      <div class="mesgs">
        <div class="msg_history">


            <div class="incoming_msg">
              <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
              <div class="received_msg">
                <div class="received_withd_msg">
                  <p>Test which is a new approach to have all
				solutions</p>
                  <span class="time_date"> 11:01 AM    |    June 9</span></div>
              </div>
            </div>

              <div class="outgoing_msg">
                <div class="sent_msg">
                  <img src="https://www.thebangkokinsight.com/wp-content/uploads/2019/09/batch_2-3.jpeg" alt="sunil" style={{ width: "40%" }} />
                  <span class="time_date"> 11:01 AM    |    June 9</span> </div>
              </div>


              <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>Test, which is a new approach to have</p>
                    <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
                </div>
              </div>


              <div class="outgoing_msg">
                <div class="sent_msg">
                  <p>Apollo University, Delhi, India Test</p>
                  <span class="time_date"> 11:01 AM    |    Today</span> </div>
              </div>


              <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="received_msg">
                  <div class="received_withd_msg">
                    <p>We work directly with our designers and suppliers,
                    and sell direct to you, which means quality, exclusive
				products, at a price anyone can afford.</p>
                    <span class="time_date"> 11:01 AM    |    Today</span></div>
                </div>
              </div>


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
