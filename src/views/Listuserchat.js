import React, { Component } from "react";
import ReactDOM ,{ useParams }from 'react-dom';
import { routerLink } from 'react-router-dom';
import { Col } from "shards-react";
import '../shards-dashboard/styles/Chat.css'
import Formchat from './Formchat'

export default function Listuserchat() {
  // const userID = useParams();
  let t = 1;
  let tt = 2;
  return (

    <div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
            <div class="srch_bar">
              <div class="stylish-input-group">
                <input type="text" class="search-bar" placeholder="Search" />
              </div>
            </div>
          </div>
          <div class="inbox_chat scroll">
            {/* <a href="chat/5"> */}
            <a href={`/chat/${t}`}>
            <div class="chat_list active_chat"  >
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="chat_ib" >
                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions
    astrology under one roof.</p>
                </div>
              </div>
            </div>
            </a>
            {/* </a> */}
          </div>

        </div>
        <Col lg="12"  >
        <Formchat id={window.location.href.split('/')[4]} />
        </Col>
      </div>

    </div>


  )
}
ReactDOM.render(<Listuserchat />, document.getElementById('root'));
