import React, { Component, useEffect, useState } from "react";
import ReactDOM, { useParams } from 'react-dom';
import { routerLink } from 'react-router-dom';
import { Col } from "shards-react";
import '../shards-dashboard/styles/Chat.css'
import Formchat from './Formchat'
import io from 'socket.io-client'
import jwt_decode from "jwt-decode";

export default function Listuserchat() {
  const socket = io.connect('http://localhost:3020')
  const [list, setlist] = useState([])


  const [num, setnum] = useState(1)
  useEffect(() => {
    if (localStorage.usertoken !== undefined) {
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token)
      let id = decoded.id
      setnum(0)
      socket.emit('listchat', { id })

      socket.on('listdata', ({ lists }) => {
        setlist([])
        if (num === 1) {
          console.log('rr', list)
          console.log("lll", lists)
          setlist(lists)
          setnum(0)
        }

      })
    } else {
      window.location = "/signin"
    }


  }, [])


  // const userID = useParams();
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

            {
              list.map((data) => (
                <a href={`/chat/${data.id}`}>
                  <div class="chat_list active_chat"  >
                    <div class="chat_people">
                      <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                      <div class="chat_ib" >
                        <h5>{data.name} <span class="chat_date">{""}</span></h5>
                        <p>{""}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))
            }



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
