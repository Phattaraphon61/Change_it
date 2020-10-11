import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";
import jwt_decode from "jwt-decode";

export default function UserActions() {
  const token = localStorage.usertoken;
  const decoded = jwt_decode(token);

  return (
    <NavItem tag={Dropdown} caret >
      <DropdownToggle tag={NavLink} className="text-nowrap px-5">
        <img
          style={{ width: "60px", height: "40px" }}
          className="user-avatar rounded-circle"
          src={"https://s.isanook.com/wo/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvMjcvMTM1NTY5L2wxLmpwZw==.jpg"}
          alt="User Avatar"
        />{" "}
        <span className="d-none d-md-inline-block ">{decoded.name+" "+decoded.lname}</span>
      </DropdownToggle>
      {/* <Collapse tag={DropdownMenu} right small open={this.state.visible}>
      <DropdownItem tag={Link} to="user-profile">
        <i className="material-icons">&#xE7FD;</i> Profile
      </DropdownItem>
      <DropdownItem tag={Link} to="edit-user-profile">
        <i className="material-icons">&#xE8B8;</i> Edit Profile
      </DropdownItem>
      <DropdownItem tag={Link} to="file-manager-list">
        <i className="material-icons">&#xE2C7;</i> Files
      </DropdownItem>
      <DropdownItem tag={Link} to="transaction-history">
        <i className="material-icons">&#xE896;</i> Transactions
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem tag={Link} to="/" className="text-danger">
        <i className="material-icons text-danger">&#xE879;</i> Logout
      </DropdownItem>
    </Collapse> */}
    </NavItem>
  )
}
