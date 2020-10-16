// import React ,{useState}from "react";
// import PropTypes from "prop-types";
// import {
//   Card,
//   CardHeader,
//   Button,
//   ListGroup,
//   ListGroupItem,
//   Progress,
//   Badge
// } from "shards-react";
// import jwt_decode from "jwt-decode";

// const UserDetails = ({ userDetails }) => (

//   <Card small className="mb-4 pt-3">
//     <CardHeader className="border-bottom text-center">
//       <div className="mb-3 mx-auto">
//         <img
//         style={{width:"145px",height: "140px"}}
//           className="rounded-circle file-loading"
//           src={userDetails.avatar}
//           width="110"
//         />
//         {/* <Badge >
//           1
//         </Badge> */}

//       </div>
//       <h4 className="mb-5">{userDetails.name}</h4>
//       {/* <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span> */}
//       {/* <Button pill outline size="sm" className="mb-2">
//         <i className="material-icons mr-1">person_add</i> Follow
//       </Button> */}
//     </CardHeader>
//     {/* <ListGroup flush>
//       <ListGroupItem className="px-4">
//         <div className="progress-wrapper">
//           <strong className="text-muted d-block mb-2">
//             {userDetails.performanceReportTitle}
//           </strong>
//           <Progress
//             className="progress-sm"
//             value={userDetails.performanceReportValue}
//           >
//             <span className="progress-value">
//               {userDetails.performanceReportValue}%
//             </span>
//           </Progress>
//         </div>
//       </ListGroupItem>
//       <ListGroupItem className="p-4">
//         <strong className="text-muted d-block mb-2">
//           {userDetails.metaTitle}
//         </strong>
//         <span>{userDetails.metaValue}</span>
//       </ListGroupItem>
//     </ListGroup> */}
//   </Card>
// );

// UserDetails.propTypes = {
//   /**
//    * The user details object.
//    */
//   userDetails: PropTypes.object
// };
// if(localStorage.usertoken !== undefined){
//   console.log("ddddddddddddddddddddddddd",localStorage.usertoken)
//   const token = localStorage.usertoken;
//   const decoded = jwt_decode(token);
// }else{
//   // window.open('http://localhost:3000/singin');
// }

// // const [decoded, setdecoded] = useState()

// if(localStorage.usertoken !== undefined){
//   const token = localStorage.usertoken;
//   const decoded = jwt_decode(token);
//   UserDetails.defaultProps = {

//     userDetails: {
//       name: decoded.name,
//       avatar: "https://s.isanook.com/wo/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjcvMTM1NTY5L2wxLmpwZw==.jpg",
//       jobTitle: "Project Manager",
//       performanceReportTitle: "Workload",
//       performanceReportValue: 74,
//       metaTitle: "Description",
//       metaValue:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
//     }
//   };
// }else{
//   UserDetails.defaultProps = {

//     userDetails: {
//       name: "",
//       avatar: "https://s.isanook.com/wo/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjcvMTM1NTY5L2wxLmpwZw==.jpg",
//       jobTitle: "Project Manager",
//       performanceReportTitle: "Workload",
//       performanceReportValue: 74,
//       metaTitle: "Description",
//       metaValue:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
//     }
//   };
//   window.open('http://localhost:3000/signin');
// }


// export default UserDetails;



import React ,{useState,useEffect}from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
  Badge
} from "shards-react";
import jwt_decode from "jwt-decode";

export default function UserDetails() {
  const [userDetails, setuserDetails] = useState()


  useEffect(() => {
    if(localStorage.usertoken !== undefined){
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      setuserDetails({
        name: `${decoded.name}  ${decoded.lname}`,
        avatar: `${decoded.image}`,
        jobTitle: "Project Manager",
        performanceReportTitle: "Workload",
        performanceReportValue: 74,
        metaTitle: "Description",
        metaValue:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
      })
    }else{
      // window.history.pushState(null, null, '/signin')
      window.location = "/signin"
    }  
  }, [])


  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-3 mx-auto">
          {userDetails !== undefined? <img
            style={{ width: "145px", height: "140px" }}
            className="rounded-circle file-loading"
            src={userDetails.avatar}
            width="110"
          />:<img
          style={{ width: "145px", height: "140px" }}
          className="rounded-circle file-loading"
          src={""}
          width="110"
        />}
          
          {/* <Badge >
          1
        </Badge> */}

        </div>
        {userDetails !== undefined ?<h4 className="mb-5">{userDetails.name}</h4>:<h4 className="mb-5">{""}</h4>}
        {/* <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span> */}
        {/* <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      </Button> */}
      </CardHeader>
      {/* <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {userDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            value={userDetails.performanceReportValue}
          >
            <span className="progress-value">
              {userDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup> */}
    </Card>
  )
}

