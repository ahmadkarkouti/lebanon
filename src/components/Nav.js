import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import firebase from "./Firestore";
import User from "../supporting_files/User";

class NavBar extends React.Component {
  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        User.getInstance().setUserID("");
        User.getInstance().setUserEmail("");
      });
  };
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form> */}
        <Nav>
          <Nav.Link onClick={() => this.logout()}>تسجيل الخروج</Nav.Link>
        </Nav>
        <Nav className="mr-auto"></Nav>

        <Navbar.Brand onClick={() => this.props.Dashboard()}>
          الامانة العامة لمجلس الوزراء
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default NavBar;
