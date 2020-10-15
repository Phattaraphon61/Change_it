import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import jwt_decode from "jwt-decode";

export default function Datachat(props) {
    const [decoded, setdecoded] = useState()
    const { id, ...rest } = props;
    const [msg, setmsg] = useState([])
    const socket = io.connect('http://localhost:3020')
    useEffect(() => {
        if(localStorage.usertoken !== undefined){
            const token = localStorage.usertoken;
            const decoded = jwt_decode(token) 
            setdecoded(decoded)

            if (id != undefined) {
                let iduser = decoded.id
                console.log(window.location.href.split('/')[3])
                if(window.location.href.split('/')[3] !== "things"){
                  socket.emit("getdata", { id, iduser })  
                }
                
                socket.on('senddatachat', ({ datachat }) => {
                    setmsg(datachat)
                    console.log("data", datachat)
                })
            }
          }else{
            // window.location = "/signin"
          }  
    }, [])
    return (msg.map((data) => {
        return data.id == decoded.id ?
            <div class="outgoing_msg">
                <div class="sent_msg">
                    {data.typevalue == "text" ?
                        <p>{data.value}</p> :
                        <img src={data.value} alt="sunil" style={{ width: "400px" }} />}

    <span   span class="time_date">{data.date}</span> </div>
            </div>
            :
            <div class="incoming_msg">
                <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                <div class="received_msg">
                    <div class="received_withd_msg">
                        {data.typevalue == "text" ?
                            <p>{data.value}</p> :
                            <img src={data.value} alt="sunil" style={{ width: "400px" }} />}
                        <span class="time_date">{data.date}</span></div>
                </div>
            </div>
    })
        // <div>
        //     <div class="incoming_msg">
        //         <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
        //         <div class="received_msg">
        //             <div class="received_withd_msg">
        //                 <p>Test which is a new approach to have all
        // 		solutions</p>
        //                 <span class="time_date"> 11:01 AM    |    June 9</span></div>
        //         </div>
        //     </div>

        //     <div class="outgoing_msg">
        //         <div class="sent_msg">
        //             <img src="https://www.thebangkokinsight.com/wp-content/uploads/2019/09/batch_2-3.jpeg" alt="sunil" style={{ width: "40%" }} />
        //             <span class="time_date"> 11:01 AM    |    June 9</span> </div>
        //     </div>


        //     <div class="incoming_msg">
        //         <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
        //         <div class="received_msg">
        //             <div class="received_withd_msg">
        //                 <p>Test, which is a new approach to have</p>
        //                 <span class="time_date"> 11:01 AM    |    Yesterday</span></div>
        //         </div>
        //     </div>


        //     <div class="outgoing_msg">
        //         <div class="sent_msg">
        //             <p>Apollo University, Delhi, India Test</p>
        //             <span class="time_date"> 11:01 AM    |    Today</span> </div>
        //     </div>


        //     <div class="incoming_msg">
        //         <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
        //         <div class="received_msg">
        //             <div class="received_withd_msg">
        //                 <p>We work directly with our designers and suppliers,
        //                 and sell direct to you, which means quality, exclusive
        // 		products, at a price anyone can afford.</p>
        //                 <span class="time_date"> 11:01 AM    |    Today</span></div>
        //         </div>
        //     </div>
        // </div>
    )
}
