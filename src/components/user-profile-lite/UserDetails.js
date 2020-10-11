import React from "react";
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

const UserDetails = ({ userDetails }) => (

  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
        style={{width:"145px",height: "140px"}}
          className="rounded-circle file-loading"
          src={userDetails.avatar}
          width="110"
        />
        {/* <Badge >
          1
        </Badge> */}

      </div>
      <h4 className="mb-5">{userDetails.name}</h4>
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
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};
const token = localStorage.usertoken;
const decoded = jwt_decode(token);
UserDetails.defaultProps = {

  userDetails: {
    name: decoded.name,
    avatar: "https://s.isanook.com/wo/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjcvMTM1NTY5L2wxLmpwZw==.jpg",
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
  }
};

export default UserDetails;
